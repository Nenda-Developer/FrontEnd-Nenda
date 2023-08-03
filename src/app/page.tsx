'use client'

import { Button } from '@/components/ui/button'
import { AuthOptionContext } from '@/context/AuthContext'
import { AuthContextType } from '@/types'
import Link from 'next/link'
import { useContext } from 'react'

const Home = () => {
  const { handleAsAuth, asAuth } = useContext(
    AuthOptionContext
  ) as AuthContextType
  console.log(asAuth)

  return (
    <main className="space-x-2">
      <Link href={'/options'}>
        <Button
          className="bg-nenda-orange"
          onClick={() => handleAsAuth('login')}
        >
          Masuk
        </Button>
      </Link>
      <Link href={'/options'}>
        <Button
          className="bg-nenda-orange"
          onClick={() => handleAsAuth('register')}
        >
          Daftar
        </Button>
      </Link>
    </main>
  )
}

export default Home
