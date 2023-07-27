import { z } from 'zod'

export const RegisterValidator = z.object({
  username: z.string().min(2, {
    message: 'Name is required'
  }),
  email: z
    .string()
    .min(1, 'The email is required.')
    .email({ message: 'The email is invalid.' }),
  domisili: z.string().min(2, {
    message: 'Domisili is required'
  }),
  textBox: z.string().min(2, {
    message: 'TextBox is required'
  })
})
