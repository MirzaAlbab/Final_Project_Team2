import * as Yup from 'yup';
export const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .label('Email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup.string().label('Password').required('Password is required'),
});

export const SignUpSchema = Yup.object().shape({
  full_name: Yup.string()
    .label('full_name')
    .min(5, 'Must Contain 5 Characters')
    .max(20, 'Max 20 Characters')
    .required('Please fill in the input full_name'),
  email: Yup.string()
    .label('Email')
    .email('Enter a valid email')
    .required('Please fill in the input email'),
  password: Yup.string()
    .label('Password')
    .required('Please fill in the input password')
    .min(6, 'Password is too short - should be 6 chars minimum'),
});
