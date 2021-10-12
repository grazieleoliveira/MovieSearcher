import React from 'react';
import {createStackNavigator} from '@react-navigation/stack/';
import { HOME } from '../shared/constants/routeNames';
import themes from '../shared/themes';
import App from '~/modules/Movies/view';
import Header from '~/shared/components/Header';

const Stack = createStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator
      initialRouteName={HOME}
      screenOptions={{
        cardStyle: {
          backgroundColor: themes.light.Colors.WHITE,
        },
      }}>
      <Stack.Screen
        name={HOME}
        component={App}
        options={{
          header: () => <Header />,
        }}
      />
    </Stack.Navigator>
  );
}
