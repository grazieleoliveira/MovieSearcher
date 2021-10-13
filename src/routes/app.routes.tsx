import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack/';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { HOME, LOGIN, PROFILE } from '../shared/constants/routeNames';
import themes from '../shared/themes';
import Header from '~/shared/components/Header';
import { Login } from '~/modules/User/views/Login';
import { Profile } from '~/modules/User/views/Profile';
import { ApplicationState, persistor } from '~/shared/store';
import { PersistGate } from 'redux-persist/integration/react';

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
                header: () => <Header />,
              }}
            />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator
            initialRouteName={PROFILE}
            screenOptions={{
              cardStyle: {
                backgroundColor: themes.light.Colors.WHITE,
              },
            }}>
            <Stack.Screen
              name={PROFILE}
              component={Profile}
              options={{
                header: () => <Header />,
              }}
            />
          </Stack.Navigator>
        )}
      </PersistGate>
    </NavigationContainer>
  );
}
