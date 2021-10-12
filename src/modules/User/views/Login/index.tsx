import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import ButtonGlobal from '~/shared/components/ButtonGlobal';
import { HOME, PROFILE } from '~/shared/constants/routeNames';
import { ApplicationState } from '~/shared/store';
import validationSchema from './validations';

import * as S from './styles';

interface DataFormProps {
  username: string;
  password: string;
}

export function Login() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [showPassword, setShowPassword] = useState(false);

  const login = (data: DataFormProps) => {
    // dispatch(loginAction(data.username, data.password));
    navigation.navigate(PROFILE);
  };

  const { handleSubmit, dirty, handleChange, values, errors } = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    onSubmit: login,
    validateOnChange: false,
  });

  const { delta } = useSelector((state: ApplicationState) => state.font);
  return (
    <S.Background behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <S.Container>
        <S.Title fontSize={36 + delta}>Movie Searcher</S.Title>
        <S.Subtitle fontSize={14 + delta}>
          Log in to start searching for your movies.
        </S.Subtitle>
        <S.InputContainer>
          <S.MyInputStyled
            label="Username"
            value={values.username}
            onChangeText={handleChange('username')}
            error={errors.username}
          />
          <S.MyInputStyled
            label="Password"
            value={values.password}
            onChangeText={handleChange('password')}
            secureTextEntry={!showPassword}
            actionIcon={() => setShowPassword(!showPassword)}
            iconRight={showPassword ? 'eye-off' : 'eye'}
            error={errors.password}
          />
        </S.InputContainer>
        <S.ButtonContainer>
          <ButtonGlobal disabled={!dirty} action={handleSubmit} title="Login" />
        </S.ButtonContainer>
      </S.Container>
    </S.Background>
  );
}
