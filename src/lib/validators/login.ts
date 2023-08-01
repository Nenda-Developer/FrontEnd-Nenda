import { z } from 'zod'

export const LoginValidator = z.object({
  username: z.string().min(2, {
    message: 'Name is required'
  }),
  password: z
    .string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      'The password must consist of a minimum of 8 characters, at least one lowercase letter, one uppercase letter, and one digit.'
    )
})
