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

export const ContributorRegisterValidator = z.object({
  username: z.string().min(2, {
    message: 'Name is required'
  }),
  email: z
    .string()
    .min(1, 'The email is required.')
    .email({ message: 'The email is invalid.' }),
  phoneNumber: z
    .string()
    .regex(/^(\+62|62|0)8[1-9][0-9]{6,9}$/g, 'Phone number is not valid')
})

export const ContributorRegisterStepTwoValidator = z.object({
  profession: z.string().min(2, {
    message: 'Profession is required'
  }),
  organization: z.string().min(2, {
    message: 'Organization is required'
  })
})
