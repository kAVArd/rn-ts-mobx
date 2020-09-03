import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontSizes: {
      xxs: number;
      xs: number;
      sm: number;
      md: number;
      xl: number;
      lg: number;
    };
    colors: {
      white: string;
      black: string;
    };
  }
}
