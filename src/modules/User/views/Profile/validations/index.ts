import Yup from '~/shared/utils/yup';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too short')
    .max(20, 'Too long')
    .required('This field is required'),

  surname: Yup.string()
    .min(2, 'Too short')
    .max(20, 'Too long')
    .required('This field is required'),

  dob: Yup.string().required('This field is required'),

  address: Yup.string()
    .min(5, 'Too short')
    .max(30, 'Too long')
    .required('This field is required'),

  image: Yup.string(),
});

export default validationSchema;
