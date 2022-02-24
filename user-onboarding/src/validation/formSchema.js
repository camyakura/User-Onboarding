import {object, string, required, boolean, min, email} from 'yup';

const formSchema = object().shape({
    name:string().trim().required('Name is Required')
        .min(2, 'Name must be longer than two characters'),
    email: string().email('must be a valid email').required('email is required'),
    password: string().required('must enter a password'),
    termsOfService:boolean()
})

export default formSchema;