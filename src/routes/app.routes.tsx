import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack/';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/integration/react';
import {
  HOME,
  LOGIN,
  MOVIE_INFO,
  PROFILE,
  TABS,
} from '../shared/constants/routeNames';
import themes from '../shared/themes';
import { Header } from '~/shared/components/Header';
import { Login } from '~/modules/User/views/Login';
import Profile from '~/modules/User/views/Profile';
import { ApplicationState, persistor } from '~/shared/store';
import { Home } from '~/modules/Movies/views/Home';
import Tabs from './tabNavigators';
import { MovieInfo } from '~/modules/Movies/views/MovieInfo';

const Stack = createStackNavigator();

export function AppRoutes() {
  const { isLoggedIn } = useSelector(
    (state: ApplicationState) => state.profile,
  );

  const profile = useSelector((state: ApplicationState) => state.profile);
  useEffect(() => {
    console.tron.log('isloggedin', isLoggedIn);
    console.tron.log('PROF', profile);
  }, [isLoggedIn, profile]);
  return (
    <NavigationContainer>
      <PersistGate loading={null} persistor={persistor}>
        {!isLoggedIn ? (
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
                header: () => <Header goBackToLast={false} />,
              }}
            />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              name={TABS}
              component={Tabs}
              options={{
                header: () => <Header goBackToLast={false} />,
              }}
            />
            <Stack.Screen
              name={PROFILE}
              component={Profile}
              options={{
                header: () => <Header goBackToLast />,
              }}
            />
            <Stack.Screen
              name={MOVIE_INFO}
              component={MovieInfo}
              options={{
                header: () => <Header goBackToLast />,
              }}
            />
          </Stack.Navigator>
        )}
      </PersistGate>
    </NavigationContainer>
  );
}
