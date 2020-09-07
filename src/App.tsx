import React from 'react';

import AppRoutes from './AppRoutes';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
      <AppRoutes />
  );
};

export default App;
