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
  accent: string;
  accentText: string;
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
    accent: '#58a6ff',
    accentText: '#79c0ff',
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
    accent: '#0969da',
    accentText: '#0550ae',
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
    secondaryText: '#666666',
    tertiaryText: '#999999',
    border: '#e0e0e0',
    surface: '#ffffff',
    accent: '#90a4ae',
    accentText: '#546e7a',
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
    background: '#1e1e1e',
    primaryText: '#e0e0e0',
    secondaryText: '#b0b0b0',
    tertiaryText: '#808080',
    border: '#3a3a3a',
    surface: '#2a2a2a',
    accent: '#78909c',
    accentText: '#90a4ae',
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
    secondaryText: '#657b83',
    tertiaryText: '#93a1a1',
    border: '#eee8d5',
    surface: '#fdf6e3',
    accent: '#268bd2',
    accentText: '#2aa198',
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
    secondaryText: '#839496',
    tertiaryText: '#586e75',
    border: '#073642',
    surface: '#073642',
    accent: '#268bd2',
    accentText: '#2aa198',
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
    secondaryText: '#a6a69c',
    tertiaryText: '#75715e',
    border: '#3e3d32',
    surface: '#3e3d32',
    accent: '#66d9ef',
    accentText: '#a6e22e',
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
    secondaryText: '#bfbfbf',
    tertiaryText: '#6272a4',
    border: '#44475a',
    surface: '#44475a',
    accent: '#bd93f9',
    accentText: '#8be9fd',
    heatStops: ['#44475a', '#8be9fd', '#ffb86c', '#ff5555'],
    activityStops: ['#44475a', '#2d5a2d', '#3d8a3d', '#50fa7b', '#7dffaa'],
    directoryPalette: [
      '#8be9fd', '#50fa7b', '#ffb86c', '#ff5555', '#bd93f9',
      '#ff79c6', '#f1fa8c', '#8be9fd', '#50fa7b', '#ffb86c',
      '#ff5555', '#bd93f9', '#ff79c6', '#f1fa8c', '#8be9fd',
    ],
  },
];

export const defaultThemeId = 'github-dark';

export function getTheme(id: string): Theme | undefined {
  return themes.find(t => t.id === id);
}
