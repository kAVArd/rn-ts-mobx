import {createTheme} from '@shopify/restyle';

const palette = {
  white: '#fff',
  black: '#000',
  cardinal: '#cb2431',
  scienceBlue: '#0366d6',
  seeGreen: '#2ea44f',
  solitude: '#eaf5ff',
  aquaHaze: '#f6f8fa',
};

const theme = createTheme({
  colors: palette,
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {},
});

export type Theme = typeof theme;
export default theme;
