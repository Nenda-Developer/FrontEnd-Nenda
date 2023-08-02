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

export const VendorRegisterValidator = z.object({
  shopName: z.string().min(2, {
    message: 'Shop Name is required'
  }),
  shopOwner: z.string().min(2, {
    message: 'Show Owner is required'
  }),
  NIKOwner: z.string().regex(/^[0-9]{16}$/, 'NIK is not valid')
})

export const VendorRegisterStepTwoValidator = z.object({
  address: z.string().min(2, {
    message: 'Address is required'
  }),
  email: z
    .string()
    .min(1, 'The email is required.')
    .email({ message: 'The email is invalid.' }),
  phoneNumber: z
    .string()
    .regex(/^(\+62|62|0)8[1-9][0-9]{6,9}$/g, 'Phone number is not valid')
})

export const VendorRegisterStepThreeValidator = z.object({
  shopScale: z.enum(['mikro', 'menengah', 'besar'], {
    required_error: 'Shop scale is Required'
  }),
  vendorLogo: z
    .custom(file => {
      if (!(file instanceof File)) {
        return 'Invalid file format'
      }
      const maxSize = 5242880 // 5MB
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif']
      if (!allowedTypes.includes(file.type)) {
        return 'Invalid file type. Only JPEG, PNG, and GIF files are allowed.'
      }
      if (file.size > maxSize) {
        return 'File size should be less than or equal to 5MB.'
      }
      return file
    })
    .optional()
})
