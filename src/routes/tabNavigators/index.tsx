import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HOME_TAB, SEARCH_TAB } from '~/shared/constants/routeNames';

import BottomTab from '../../routes/bottomTab';

import Navigators from '~/routes/stackNavigators';

const Tab = createBottomTabNavigator();

const Tabs: React.FC = () => (
  <>
    <Tab.Navigator tabBar={(props) => <BottomTab {...props} />}>
      <Tab.Screen
        name={HOME_TAB}
        options={{ headerShown: false }}
        component={Navigators.Home}
      />
      <Tab.Screen
        name={SEARCH_TAB}
        options={{ headerShown: false }}
        component={Navigators.Search}
      />
    </Tab.Navigator>
  </>
);

export default Tabs;
