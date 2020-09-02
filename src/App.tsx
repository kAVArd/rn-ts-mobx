import React from 'react';

import {ThemeProvider} from 'styled-components/native';
import MainView from './features/app/views/MainView';
import theme from './theme';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainView />
    </ThemeProvider>
  );
};

export default App;
