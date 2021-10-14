import { useNavigation } from '@react-navigation/core';
import React, { PropsWithChildren } from 'react';
import { useDispatch } from 'react-redux';

import {
  incrementFontSize,
  decrementFontSize,
  recoveryFontSize,
} from '~/shared/store/ducks/font/actions';
import { toogleTheme } from '~/shared/store/ducks/theme/actions';

import * as S from './styles';

interface HeaderProps {
  goBackToLast: boolean;
}

export const Header: React.FC<HeaderProps> = ({ goBackToLast }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  console.tron.log('GOBACK', goBackToLast);

  const onGoBack = () => {
    navigation.goBack();
  };
  return (
    <S.Container>
      {goBackToLast && (
        <S.Button onPress={() => onGoBack()}>
          <S.BackIcon />
        </S.Button>
      )}
      <S.ContainerFont>
        <S.Button onPress={() => dispatch(toogleTheme())}>
          <S.IconColor />
        </S.Button>
        <S.Button onPress={() => dispatch(decrementFontSize())}>
          <S.DecreaseIncreaseFont>A-</S.DecreaseIncreaseFont>
        </S.Button>
        <S.Button onPress={() => dispatch(recoveryFontSize())}>
          <S.RestoreFont>A</S.RestoreFont>
        </S.Button>
        <S.Button onPress={() => dispatch(incrementFontSize())}>
          <S.DecreaseIncreaseFont>A+</S.DecreaseIncreaseFont>
        </S.Button>
      </S.ContainerFont>
    </S.Container>
  );
};

export const headerOption = {
  header: (props: any) => <Header {...props} />,
};
