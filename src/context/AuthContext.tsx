import { AuthContextType, AuthRegisterUserType } from '@/types'
import { ReactNode, createContext, useState } from 'react'
import { useToast } from '@/components/ui/use-toast'
import { BASEURL } from '@/constants'

export const AuthOptionContext = createContext<AuthContextType | {}>({})
export const AuthUserRegisterContext = createContext<
  AuthRegisterUserType | undefined
>(undefined)

const AuthOptionProvider = ({ children }: { children: ReactNode }) => {
  const { toast } = useToast()
  const [asAuth, setAsAuth] = useState('')
  const [loading, setLoading] = useState(false)

  const handleAsAuth = (as: string) => {
    setAsAuth(as)
  }

  const handleUserRegister = async (
    name: string,
    email: string,
    password: string
  ) => {
    setLoading(true)
    try {
      const response = await fetch(BASEURL + '/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          password
        })
      })
      const responseData = await response.json()
      if (response.ok) {
        toast({
          variant: 'success',
          description: responseData.message
        })
      } else {
        toast({
          description: `${responseData.message} Try again!`,
          variant: 'failed'
        })
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const handleContributorRegister = async (
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
    phoneNumber: string,
    profession: string,
    community: string,
    mountExperience: string[]
  ) => {
    setLoading(true)
    try {
      const response = await fetch(BASEURL + '/auth/register?type=writer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/vnd.api+json'
        },
        body: JSON.stringify({
          name,
          email,
          password,
          password_confirmation: confirmPassword,
          no_whatsapp: phoneNumber,
          occupation: profession,
          comunity: community,
          mount_experience: mountExperience
        })
      })
      const responseData = await response.json()
      console.log('tess', responseData.message)
      if (response.ok) {
        toast({
          variant: 'success',
          description: responseData.message
        })
      } else {
        toast({
          description: `${responseData.message} Try again!`,
          variant: 'failed'
        })
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthOptionContext.Provider value={{ asAuth, handleAsAuth }}>
      <AuthUserRegisterContext.Provider
        value={{ loading, handleUserRegister, handleContributorRegister }}
      >
        {children}
      </AuthUserRegisterContext.Provider>
    </AuthOptionContext.Provider>
  )
}

export default AuthOptionProvider
