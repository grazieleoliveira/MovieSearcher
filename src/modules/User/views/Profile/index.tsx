import { useNavigation } from '@react-navigation/core';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Modal } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ButtonGlobal from '../../../../shared/components/ButtonGlobal';
import Input from '~/shared/components/Input';
import { HOME } from '../../../../shared/constants/routeNames';
import { ApplicationState } from '~/shared/store';
import { setProfileAction } from '~/modules/User/store/ducks/actions';
import ModalOptionsCamera from '~/modules/User/components/ModalOptionsCamera';
import { mask } from '~/modules/User/utils/masks';

import * as S from './styles';
import validationSchema from './validations';
import RadioButtonList from '~/shared/components/RadioButton/RadioButtonList';

const genders = [
  {
    id: 1,
    gender: 'Male',
  },
  {
    id: 2,
    gender: 'Female',
  },
  {
    id: 3,
    gender: 'Other',
  },
];

interface DataProps {
  name: string;
  surname: string;
  dob: string;
  address: string;
  image: string;
  gender: string;
}

const Profile: React.FC = () => {
  const dispatch = useDispatch();

  const { currentUser } = useSelector(
    (state: ApplicationState) => state.profile,
  );

  const [modalIsVisible, setModalIsVisible] = useState(false);

  const navigation = useNavigation();

  const saveProfile = (data: DataProps) => {
    dispatch(
      setProfileAction({
        name: data.name,
        surname: data.surname,
        dob: data.dob,
        address: data.address,
        gender: data.gender,
        image: data.image,
      }),
    );

    navigation.navigate(HOME);
  };

  const { handleSubmit, dirty, handleChange, values, errors, setFieldValue } =
    useFormik({
      initialValues: {
        name: currentUser.name,
        surname: currentUser.surname,
        dob: currentUser.dob,
        address: currentUser.address,
        gender: currentUser.gender,
        image: currentUser.image,
      },
      validationSchema,
      onSubmit: saveProfile,
      validateOnChange: false,
    });

  const setNewImage = (path: string) => {
    setFieldValue('image', path);
    setModalIsVisible(false);
  };

  return (
    <S.Container>
      <S.ContainerImage>
        <S.Touchable onPress={() => setModalIsVisible(true)}>
          {values.image ? (
            <S.Image source={{ uri: values.image }} />
          ) : (
            <S.IconPerson />
          )}
          <S.ContainerIcon>
            <S.IconEdit />
          </S.ContainerIcon>
        </S.Touchable>
      </S.ContainerImage>
      <Input
        label="Name"
        value={values.name}
        onChangeText={handleChange('name')}
        error={errors.name}
      />
      <Input
        label="Surname"
        value={values.surname}
        onChangeText={handleChange('surname')}
        error={errors.surname}
      />
      <RadioButtonList
        label="Gender"
        selected={values.gender}
        checkRadio={(value) => {
          setFieldValue('gender', value);
        }}
        data={genders}
      />
      <Input
        label="Birthdate"
        value={values.dob}
        onChangeText={(value) => {
          setFieldValue('dob', value ? mask.birthdate(value) : value);
        }}
        error={errors.dob}
      />
      <Input
        label="Address"
        value={values.address}
        onChangeText={handleChange('address')}
        error={errors.address}
      />
      <S.ButtonContainer>
        <ButtonGlobal disabled={!dirty} action={handleSubmit} title="Salvar" />
      </S.ButtonContainer>
      <Modal
        transparent
        visible={modalIsVisible}
        onRequestClose={() => setModalIsVisible(true)}>
        <ModalOptionsCamera
          closeModal={() => setModalIsVisible(false)}
          setNewImage={setNewImage}
        />
      </Modal>
    </S.Container>
  );
};

export default Profile;
