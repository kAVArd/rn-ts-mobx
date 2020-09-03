import React from 'react';

import {ThemeProvider} from 'styled-components/native';
import theme from './theme';
import AppRoutes from './AppRoutes';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;
