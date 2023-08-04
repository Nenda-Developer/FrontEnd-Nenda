export interface IFormUserRegister {
  username: string
  email: string
  textBox: string
  domisili: string
  password: string
  confirmPassword: string
}

export interface IOption {
  id: number
  role: string
  icon: string
  description: string
  loginDestination: string
  registerDestination: string
}

export type AuthContextType = {
  handleAsAuth: (as: string) => void
  asAuth: string
  loading: boolean
  handleUserRegister: (
    name: string,
    email: string,
    password: string
  ) => Promise<void>
}

export type AuthRegisterUserType = {
  loading?: boolean
  handleUserRegister: (
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
    domicile: string,
    reason: string
  ) => Promise<void>
  handleContributorRegister: (
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
    phoneNumber: string,
    profession: string,
    community: string,
    mountExperience: string[]
  ) => Promise<void>
  handleVendorRegister: (
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
    identityNumber: string,
    shopName: string,
    address: string,
    scale: string,
    terms: boolean
  ) => Promise<void>
}

export interface IMountain {
  id: number
  mountainName: string
}
