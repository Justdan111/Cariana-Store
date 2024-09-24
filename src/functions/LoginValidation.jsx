
import {z} from 'zod';

export const loginValidationSchema = z.object({
    // username: z.string().min(3, {message: 'Must not be less than 4 characters'})
    // .max(20, {message: 'Must not exceed 20 characters'}),
    password: z.string().min(6, {message: 'Must not be less than 6 characters'})
    .max(10, {message: 'Must not exceed 10 characters'}),
    email:  z.string()

})