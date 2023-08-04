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

  // this is for handling user register
  const handleUserRegister = async (
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
    domicile: string,
    reason: string
  ) => {
    setLoading(true)
    try {
      const response = await fetch(BASEURL + '/auth/register?type=hiker', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          password,
          password_confirmation: confirmPassword,
          domicile,
          reason_to_join: reason
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

  // this is for handling contributor register
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

  // this is for handling vendor register
  const handleVendorRegister = async (
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
    identityNumber: string,
    shopeName: string,
    address: string,
    scale: string,
    terms: boolean
  ) => {
    console.log('tessss', name)
    console.log('tes', email)

    setLoading(true)
    try {
      const response = await fetch(BASEURL + '/auth/register?type=vendor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          password,
          password_confirmation: confirmPassword,
          nik: identityNumber,
          vendor: {
            name: shopeName,
            address,
            scale,
            terms
          }
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
        value={{
          loading,
          handleUserRegister,
          handleContributorRegister,
          handleVendorRegister
        }}
      >
        {children}
      </AuthUserRegisterContext.Provider>
    </AuthOptionContext.Provider>
  )
}

export default AuthOptionProvider
