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
