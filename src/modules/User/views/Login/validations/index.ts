import Yup from '~/shared/utils/yup';

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .email('Invalid email')
    .required()
    .label('Email')
    .test(
      '',
      'Email is not registered',
      (value, context) => value === 'admin@gmail.com',
    ),

  password: Yup.string()
    .min(5, 'Your password is too short')
    .max(20, 'Your password is too long')
    .required()
    .label('Senha')
    .test('', 'Incorrect password', (value, context) => value === '123456'),
});

export default validationSchema;
