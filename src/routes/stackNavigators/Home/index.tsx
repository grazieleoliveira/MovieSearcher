import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '~/modules/Movies/views/Home';

import { HOME } from '~/shared/constants/routeNames';

const { Navigator, Screen } = createStackNavigator();

const HomeStack: React.FC = () => (
  <Navigator>
    <Screen name={HOME} component={Home} options={{ headerShown: false }} />
  </Navigator>
);

export default HomeStack;
