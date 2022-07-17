import * as Yup from 'yup';

export const updateProfileSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  kota: Yup.string().required('Required'),
  alamat: Yup.string()
    .min(2, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required'),
  nomortelepon: Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number cant' start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(10)
    .required('Required'),
});
export const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .label('Email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup.string().label('Password').required('Password is required'),
});
export const gantiPassSchema = Yup.object().shape({
  current_password: Yup.string().required('Please Enter your password').trim(),

  new_password: Yup.string()
    .required('Please Enter your password')
    .trim()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
    ),
  confirm_password: Yup.string()
    .required('Please Enter your password')
    .trim()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
    ),
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
    .matches(
      ' ((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))',
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
    ),
});
