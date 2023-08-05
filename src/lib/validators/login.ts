import { z } from 'zod'

export const LoginValidator = z.object({
  email: z
    .string()
    .min(1, 'The email is required.')
    .email({ message: 'The email is invalid.' }),
  password: z.string().min(8, 'Password must be 8 characters at minimum')
})
