import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import { useSelector } from 'react-redux';
import { AppRoutes } from './app.routes';
import * as S from './styles';
import { ApplicationState } from '~/shared/store';
import { createTheme } from '~/shared/utils/theme';

export function Routes() {
  const { theme } = useSelector((state: ApplicationState) => state.theme);

  return (
    <ThemeProvider theme={createTheme(theme)}>
      <S.StatusBar translucent={false} barStyle="dark-content" />
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
