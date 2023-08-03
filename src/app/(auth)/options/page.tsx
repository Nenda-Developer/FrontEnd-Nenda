'use client'

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { OPTIONS } from '@/constants'
import { AuthOptionContext } from '@/context/AuthContext'
import { AuthContextType } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useContext } from 'react'

const OptionPage: FC = () => {
  const { asAuth } = useContext(AuthOptionContext) as AuthContextType

  return (
    <div className="flex flex-col items-center justify-center max-w-full min-h-screen space-y-10">
      <div className="container w-full mx-auto md:px-52">
        <h1 className="w-full md:w-fit text-white md:text-5xl font-semibold text-start bg-nenda-dark-blue px-[55px] py-4 rounded-full">
          <span className="text-nenda-orange">Daftar / Masuk</span> Sebagai
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {(() => {
          switch (asAuth) {
            case 'register': {
              return OPTIONS.map(option => (
                <Link
                  key={option.id}
                  href={`${
                    asAuth === 'register' ? option.registerDestination : null
                  }`}
                >
                  <Card className="flex flex-col items-center max-w-[318px] h-full py-12 antialiased font-normal bg-nenda-dark-blue rounded-3xl cursor-pointer hover:bg-opacity-50">
                    <CardHeader>
                      <Image
                        src={option.icon}
                        alt={option.role}
                        className="mb-5"
                      />
                    </CardHeader>
                    <CardContent className="mb-2 text-2xl font-semibold text-white">
                      {option.role}
                    </CardContent>
                    <CardFooter className="text-lg text-center text-white">
                      {option.description}
                    </CardFooter>
                  </Card>
                </Link>
              ))
            }
            case 'login': {
              return OPTIONS.map(option => (
                <Link
                  key={option.id}
                  href={`${
                    asAuth === 'login' ? option.loginDestination : null
                  }`}
                >
                  <Card
                    key={option.id}
                    className="flex flex-col items-center max-w-[318px] h-full py-12 antialiased font-normal bg-nenda-dark-blue rounded-3xl cursor-pointer hover:bg-opacity-50"
                  >
                    <CardHeader>
                      <Image
                        src={option.icon}
                        alt={option.role}
                        className="mb-5"
                      />
                    </CardHeader>
                    <CardContent className="mb-2 text-2xl font-semibold text-white">
                      {option.role}
                    </CardContent>
                    <CardFooter className="text-lg text-center text-white">
                      {option.description}
                    </CardFooter>
                  </Card>
                </Link>
              ))
            }
            default:
              break
          }
        })()}
      </div>
    </div>
  )
}

export default OptionPage
