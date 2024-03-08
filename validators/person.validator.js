import yup from 'yup';

export const personValidator = yup.object().shape({
    email: yup.string().email().required().trim(),
    firstname: yup.string().trim().required().min(2),
    lastname: yup.string().trim().required().min(2),
    confirm: yup.boolean().required(),
    nbGuest: yup.number().positive().min(1)
});