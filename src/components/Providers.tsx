'use client'

import AuthOptionProvider from '@/context/AuthContext'
import { ReactNode } from 'react'

const Providers = ({ children }: { children: ReactNode }) => {
  return <AuthOptionProvider>{children}</AuthOptionProvider>
}

export default Providers
