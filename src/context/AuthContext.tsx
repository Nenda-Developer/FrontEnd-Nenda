import { AuthContextType } from '@/types'
import { ReactNode, createContext, useState } from 'react'

export const AuthOptionContext = createContext<AuthContextType | {}>({})

const AuthOptionProvider = ({ children }: { children: ReactNode }) => {
  const [asAuth, setAsAuth] = useState('')

  const handleAsAuth = (as: string) => {
    setAsAuth(as)
  }

  return (
    <AuthOptionContext.Provider value={{ asAuth, handleAsAuth }}>
      {children}
    </AuthOptionContext.Provider>
  )
}

export default AuthOptionProvider
