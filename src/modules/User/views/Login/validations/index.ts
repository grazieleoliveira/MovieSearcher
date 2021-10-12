import Yup from '~/shared/utils/yup';

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(5, 'Your username is too short')
    .max(20, 'Your username is too long')
    .required('Required')
    .test(
      '',
      'Username or password is incorrect',
      (value, context) => value === 'admin',
    ),

  password: Yup.string()
    .min(5, 'Your password is too short')
    .max(20, 'Your password is too long')
    .required()
    .label('Senha')
    .test(
      '',
      'Username or password is incorrect',
      (value, context) => value === '123456',
    ),
});

export default validationSchema;
