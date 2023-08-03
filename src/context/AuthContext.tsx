import { AuthContextType, IAuthCategories } from '@/types'
import { ReactNode, createContext, useState } from 'react'

export const AuthOptionContext = createContext<AuthContextType | {}>({})

const AuthOptionProvider = ({ children }: { children: ReactNode }) => {
  const [asAuth, setAsAuth] = useState<IAuthCategories | ''>('')

  const handleAsAuth = (as: IAuthCategories) => {
    setAsAuth(as)
  }

  return (
    <AuthOptionContext.Provider value={{ asAuth, handleAsAuth }}>
      {children}
    </AuthOptionContext.Provider>
  )
}

export default AuthOptionProvider
