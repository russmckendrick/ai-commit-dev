import { marked } from 'marked';
import fallbackData from '../data/releases.fallback.json';

export interface Release {
  tag: string;
  version: string;
  name: string;
  bodyHtml: string;
  bodyMarkdown: string;
  publishedAt: string;
  url: string;
  prerelease: boolean;
}

interface GitHubRelease {
  tag_name: string;
  name: string | null;
  body: string | null;
  published_at: string | null;
  html_url: string;
  prerelease: boolean;
  draft: boolean;
}

const REPO = 'russmckendrick/aicommit';
const API_URL = `https://api.github.com/repos/${REPO}/releases?per_page=100`;

marked.setOptions({ gfm: true, breaks: false });

function stripV(tag: string): string {
  return tag.replace(/^v/i, '');
}

function renderBody(markdown: string): string {
  return marked.parse(markdown, { async: false }) as string;
}

function normalise(raw: GitHubRelease): Release {
  const body = raw.body ?? '';
  return {
    tag: raw.tag_name,
    version: stripV(raw.tag_name),
    name: raw.name?.trim() || raw.tag_name,
    bodyMarkdown: body,
    bodyHtml: renderBody(body),
    publishedAt: raw.published_at ?? '',
    url: raw.html_url,
    prerelease: raw.prerelease,
  };
}

let cache: Promise<Release[]> | null = null;

async function fetchFromGitHub(): Promise<Release[]> {
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'ai-commit-dev-docs',
    'X-GitHub-Api-Version': '2022-11-28',
  };

  const token = process.env.GITHUB_TOKEN;
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(API_URL, { headers });
  if (!res.ok) {
    throw new Error(`GitHub releases fetch failed: ${res.status} ${res.statusText}`);
  }

  const data = (await res.json()) as GitHubRelease[];
  return data
    .filter((r) => !r.draft)
    .map(normalise);
}

function loadFallback(): Release[] {
  return (fallbackData as GitHubRelease[])
    .filter((r) => !r.draft)
    .map(normalise);
}

export async function getReleases(): Promise<Release[]> {
  if (!cache) {
    cache = fetchFromGitHub().catch((err) => {
      console.warn(`[releases] ${err.message} — falling back to src/data/releases.fallback.json`);
      return loadFallback();
    });
  }
  return cache;
}

export async function getLatestRelease(): Promise<Release | null> {
  const releases = await getReleases();
  return releases.find((r) => !r.prerelease) ?? releases[0] ?? null;
}
