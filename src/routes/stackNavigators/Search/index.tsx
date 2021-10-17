import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import { SEARCH } from '../../../shared/constants/routeNames';
import { Search } from '~/modules/Movies/views/Search';

const { Navigator, Screen } = createStackNavigator();

const SearchStack: React.FC = () => (
  <Navigator>
    <Screen name={SEARCH} component={Search} options={{ headerShown: false }} />
  </Navigator>
);

export default SearchStack;
