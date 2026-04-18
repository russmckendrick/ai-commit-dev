export interface Theme {
  id: string;
  name: string;
  variant: 'light' | 'dark';
  background: string;
  primaryText: string;
  secondaryText: string;
  tertiaryText: string;
  border: string;
  surface: string;
  surfaceRaised: string;
  accent: string;
  accentText: string;
  danger: string;
  warn: string;
  info: string;
  heatStops: [string, string, string, string];
  activityStops: [string, string, string, string, string];
  directoryPalette: string[];
}

export const themes: Theme[] = [
  {
    id: 'github-dark',
    name: 'GitHub Dark',
    variant: 'dark',
    background: '#0d1117',
    primaryText: '#e6edf3',
    secondaryText: '#8b949e',
    tertiaryText: '#6e7681',
    border: '#30363d',
    surface: '#161b22',
    surfaceRaised: '#21262d',
    accent: '#58a6ff',
    accentText: '#79c0ff',
    danger: '#f85149',
    warn: '#d29922',
    info: '#79c0ff',
    heatStops: ['#161b22', '#388bfd', '#d47616', '#f85149'],
    activityStops: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
    directoryPalette: [
      '#58a6ff', '#3fb950', '#d29922', '#f85149', '#bc8cff',
      '#79c0ff', '#56d364', '#e3b341', '#ff7b72', '#d2a8ff',
      '#a5d6ff', '#7ee787', '#f2cc60', '#ffa198', '#e8c6ff',
    ],
  },
  {
    id: 'github-light',
    name: 'GitHub Light',
    variant: 'light',
    background: '#ffffff',
    primaryText: '#1f2328',
    secondaryText: '#656d76',
    tertiaryText: '#8b949e',
    border: '#d1d9e0',
    surface: '#f6f8fa',
    surfaceRaised: '#eaeef2',
    accent: '#0969da',
    accentText: '#0550ae',
    danger: '#cf222e',
    warn: '#bf8700',
    info: '#218bff',
    heatStops: ['#edf2f7', '#54aeff', '#e16f24', '#cf222e'],
    activityStops: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
    directoryPalette: [
      '#0969da', '#1a7f37', '#bf8700', '#cf222e', '#8250df',
      '#0550ae', '#2da44e', '#d4a72c', '#ff8182', '#a475f9',
      '#218bff', '#3fb950', '#d29922', '#f85149', '#bc8cff',
    ],
  },
  {
    id: 'classic-light',
    name: 'Classic Light',
    variant: 'light',
    background: '#fafafa',
    primaryText: '#1a1a1a',
    secondaryText: '#555555',
    tertiaryText: '#888888',
    border: '#d0d0d0',
    surface: '#ffffff',
    surfaceRaised: '#f0f0f0',
    accent: '#546e7a',
    accentText: '#37474f',
    danger: '#c62828',
    warn: '#ef6c00',
    info: '#1565c0',
    heatStops: ['#e8eaf6', '#42a5f5', '#ffb74d', '#ef5350'],
    activityStops: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
    directoryPalette: [
      '#4fc3f7', '#81c784', '#ffb74d', '#e57373', '#ba68c8',
      '#4dd0e1', '#aed581', '#ffd54f', '#ff8a65', '#9575cd',
      '#26c6da', '#dce775', '#ffca28', '#ff7043', '#7e57c2',
    ],
  },
  {
    id: 'classic-dark',
    name: 'Classic Dark',
    variant: 'dark',
    background: '#1a1a1a',
    primaryText: '#e8e8e8',
    secondaryText: '#aaaaaa',
    tertiaryText: '#777777',
    border: '#3a3a3a',
    surface: '#222222',
    surfaceRaised: '#2c2c2c',
    accent: '#90a4ae',
    accentText: '#b0bec5',
    danger: '#ef5350',
    warn: '#ffa726',
    info: '#29b6f6',
    heatStops: ['#263238', '#1565c0', '#ef6c00', '#c62828'],
    activityStops: ['#2a2a2a', '#0e4429', '#006d32', '#26a641', '#39d353'],
    directoryPalette: [
      '#29b6f6', '#66bb6a', '#ffa726', '#ef5350', '#ab47bc',
      '#26c6da', '#9ccc65', '#ffca28', '#ff7043', '#7e57c2',
      '#00bcd4', '#c0ca33', '#ffc107', '#ff5722', '#673ab7',
    ],
  },
  {
    id: 'solarized-light',
    name: 'Solarized Light',
    variant: 'light',
    background: '#fdf6e3',
    primaryText: '#073642',
    secondaryText: '#586e75',
    tertiaryText: '#93a1a1',
    border: '#d5c9a0',
    surface: '#eee8d5',
    surfaceRaised: '#e4debb',
    accent: '#268bd2',
    accentText: '#2aa198',
    danger: '#dc322f',
    warn: '#cb4b16',
    info: '#268bd2',
    heatStops: ['#eee8d5', '#268bd2', '#cb4b16', '#dc322f'],
    activityStops: ['#eee8d5', '#859900', '#6c8f00', '#4a7800', '#2a6100'],
    directoryPalette: [
      '#268bd2', '#859900', '#cb4b16', '#dc322f', '#6c71c4',
      '#2aa198', '#b58900', '#d33682', '#268bd2', '#859900',
      '#cb4b16', '#dc322f', '#6c71c4', '#2aa198', '#b58900',
    ],
  },
  {
    id: 'solarized-dark',
    name: 'Solarized Dark',
    variant: 'dark',
    background: '#002b36',
    primaryText: '#eee8d5',
    secondaryText: '#93a1a1',
    tertiaryText: '#657b83',
    border: '#0f4a59',
    surface: '#073642',
    surfaceRaised: '#0a4b5a',
    accent: '#2aa198',
    accentText: '#268bd2',
    danger: '#dc322f',
    warn: '#b58900',
    info: '#268bd2',
    heatStops: ['#073642', '#268bd2', '#cb4b16', '#dc322f'],
    activityStops: ['#073642', '#1a4a1a', '#2d6a2d', '#859900', '#a6c400'],
    directoryPalette: [
      '#268bd2', '#859900', '#cb4b16', '#dc322f', '#6c71c4',
      '#2aa198', '#b58900', '#d33682', '#268bd2', '#859900',
      '#cb4b16', '#dc322f', '#6c71c4', '#2aa198', '#b58900',
    ],
  },
  {
    id: 'monokai',
    name: 'Monokai',
    variant: 'dark',
    background: '#272822',
    primaryText: '#f8f8f2',
    secondaryText: '#cfcfc2',
    tertiaryText: '#a6a69c',
    border: '#49483e',
    surface: '#3e3d32',
    surfaceRaised: '#49483e',
    accent: '#a6e22e',
    accentText: '#66d9ef',
    danger: '#f92672',
    warn: '#fd971f',
    info: '#66d9ef',
    heatStops: ['#3e3d32', '#66d9ef', '#fd971f', '#f92672'],
    activityStops: ['#3e3d32', '#4a5e2b', '#6a8f2b', '#a6e22e', '#c8f560'],
    directoryPalette: [
      '#66d9ef', '#a6e22e', '#fd971f', '#f92672', '#ae81ff',
      '#e6db74', '#66d9ef', '#a6e22e', '#fd971f', '#f92672',
      '#ae81ff', '#e6db74', '#66d9ef', '#a6e22e', '#fd971f',
    ],
  },
  {
    id: 'dracula',
    name: 'Dracula',
    variant: 'dark',
    background: '#282a36',
    primaryText: '#f8f8f2',
    secondaryText: '#c7c7c0',
    tertiaryText: '#8b8ba0',
    border: '#44475a',
    surface: '#343746',
    surfaceRaised: '#44475a',
    accent: '#bd93f9',
    accentText: '#8be9fd',
    danger: '#ff5555',
    warn: '#ffb86c',
    info: '#8be9fd',
    heatStops: ['#44475a', '#8be9fd', '#ffb86c', '#ff5555'],
    activityStops: ['#44475a', '#2d5a2d', '#3d8a3d', '#50fa7b', '#7dffaa'],
    directoryPalette: [
      '#8be9fd', '#50fa7b', '#ffb86c', '#ff5555', '#bd93f9',
      '#ff79c6', '#f1fa8c', '#8be9fd', '#50fa7b', '#ffb86c',
      '#ff5555', '#bd93f9', '#ff79c6', '#f1fa8c', '#8be9fd',
    ],
  },
];

export const defaultThemeId = 'solarized-dark';

export function getTheme(id: string): Theme | undefined {
  return themes.find(t => t.id === id);
}
