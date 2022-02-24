import * as yup from 'yup';

const formSchema = yup.object().shape({
    name:yup
        .string()
        .trim()
        .required('Name is Required')
        .min(3, 'Name must be longer than two characters'),
    email: yup
        .string()
        .email('must be a valid email')
        .required('email is required'),
    password: yup
        .string()
        .required('must enter a password'),
    tos: yup
        .boolean()
        .oneOf([true], 'Must accept terms and conditions')
})

export default formSchema;