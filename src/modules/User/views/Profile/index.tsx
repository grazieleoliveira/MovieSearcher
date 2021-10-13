import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import { BackHandler, View } from 'react-native';

export function Profile() {
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        BackHandler.exitApp();
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );
  return <View />;
}
