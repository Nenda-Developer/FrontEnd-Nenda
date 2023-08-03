export interface IOption {
  id: number
  role: string
  icon: string
  description: string
  loginDestination: string
  registerDestination: string
}

export interface IAuthCategories {
  authOptions: string
}

export type AuthContextType = {
  handleAsAuth: (as: string) => void
  asAuth: string
}
