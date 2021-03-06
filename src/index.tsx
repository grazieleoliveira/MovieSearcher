import React from 'react';
import {} from 'styled-components/native';
import { Provider as StoreProvider } from 'react-redux';
import 'react-native-reanimated';
import { store } from '~/shared/store';

import { Routes } from './routes';

const App: React.FC = () => (
  <StoreProvider store={store}>
    <Routes />
  </StoreProvider>
);

export default App;
