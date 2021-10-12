import React from 'react';
import { createStackNavigator } from '@react-navigation/stack/';
import { HOME, LOGIN, PROFILE } from '../shared/constants/routeNames';
import themes from '../shared/themes';
import App from '~/modules/Movies/view';
import Header from '~/shared/components/Header';
import { Login } from '~/modules/User/views/Login';
import { Profile } from '~/modules/User/views/Profile';

const Stack = createStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator
      initialRouteName={LOGIN}
      screenOptions={{
        cardStyle: {
          backgroundColor: themes.light.Colors.WHITE,
        },
      }}>
      <Stack.Screen
        name={LOGIN}
        component={Login}
        options={{
          header: () => <Header />,
        }}
      />
      <Stack.Screen
        name={PROFILE}
        component={Profile}
        options={{
          header: () => <Header />,
        }}
      />
    </Stack.Navigator>
  );
}
