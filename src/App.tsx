import React from 'react';
import { ThemeProvider } from '@shopify/restyle';

import AppRoutes from './AppRoutes';
import theme from 'theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <AppRoutes />
  </ThemeProvider>
);

export default App;
