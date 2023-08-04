'use client'

import React, { FC, useContext, useState } from 'react'
import NendaLogo from '@/assets/images/nenda-logo.png'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import Image from 'next/image'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { RegisterValidator } from '@/lib/validators/register'
import {
  AuthContextType,
  AuthRegisterUserType,
  IFormUserRegister
} from '@/types'
import EyeOff from '@/assets/icons/eye-off.svg'
import EyeOn from '@/assets/icons/eye-on.svg'
import { AuthUserRegisterContext } from '@/context/AuthContext'
import Link from 'next/link'

const UserRegisterPage: FC = () => {
  const [show, setShow] = useState<boolean>(false)
  const [showConfirm, setShowConfirm] = useState<boolean>(false)
  const { handleUserRegister, loading } = useContext(
    AuthUserRegisterContext
  ) as AuthRegisterUserType
  const form = useForm<z.infer<typeof RegisterValidator>>({
    resolver: zodResolver(RegisterValidator),
    defaultValues: {
      username: '',
      email: '',
      domisili: '',
      textBox: '',
      password: '',
      confirmPassword: ''
    }
  })
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()

  const showHandler = () => {
    setShow(!show)
  }

  const showConfirmHandler = () => {
    setShowConfirm(!showConfirm)
  }

  const onSubmit = (data: IFormUserRegister) => {
    handleUserRegister(
      data.username,
      data.email,
      data.password,
      data.confirmPassword,
      data.domisili,
      data.textBox
    )
  }

  return (
    <div className="w-full h-full">
      <div className="flex items-center justify-center w-full max-w-5xl min-h-screen px-5 py-20 mx-auto md:px-0">
        <div className="w-full">
          <h1 className="font-medium text-white  md:w-fit md:text-[28px] text-start mb-8">
            <span className="text-nenda-orange">Daftar Sebagai </span>
            Pendaki Umum
          </h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel
                      htmlFor="username"
                      className="text-base font-medium text-white"
                    >
                      Nama Lengkap :
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="username"
                        aria-describedby="username"
                        placeholder="cth : Malik Fajar"
                        {...field}
                        className="rounded-[5px] py-6 bg-nenda-dark-blue text-white placeholder:text-[#203D53] focus:outline-nenda-orange"
                      />
                    </FormControl>
                    <FormMessage className="text-red-600" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel
                      htmlFor="email"
                      className="text-base font-medium text-white"
                    >
                      Email :
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="email"
                        aria-describedby="email"
                        placeholder="cth : name@gmail.com"
                        {...field}
                        className="rounded-[5px] py-6 bg-nenda-dark-blue text-white placeholder:text-[#203D53] focus:outline-nenda-orange"
                      />
                    </FormControl>
                    <FormMessage className="text-red-600" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel
                      htmlFor="password"
                      className="text-base font-medium text-white"
                    >
                      Kata Sandi :
                    </FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input
                          id="password"
                          aria-describedby="password"
                          type={!show ? 'password' : 'text'}
                          placeholder="_____________"
                          {...field}
                          className="rounded-[5px] py-6 bg-nenda-dark-blue text-white placeholder:text-[#203D53] focus:outline-nenda-orange"
                        />
                      </FormControl>
                      <Image
                        src={!show ? EyeOff : EyeOn}
                        alt="eyeoff"
                        className="absolute cursor-pointer right-5 top-[30%]"
                        onClick={showHandler}
                      />
                    </div>
                    <FormMessage className="text-red-600" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel
                      htmlFor="confirmPassword"
                      className="text-base font-medium text-white"
                    >
                      Konfirmasi Kata Sandi :
                    </FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input
                          id="confirmPassword"
                          aria-describedby="confirmPassword"
                          type={!showConfirm ? 'password' : 'text'}
                          placeholder="_____________"
                          {...field}
                          className="rounded-[5px] py-6 bg-nenda-dark-blue text-white placeholder:text-[#203D53] focus:outline-nenda-orange"
                        />
                      </FormControl>
                      <Image
                        src={!showConfirm ? EyeOff : EyeOn}
                        alt="eyeoff"
                        className="absolute cursor-pointer right-5 top-[30%]"
                        onClick={showConfirmHandler}
                      />
                    </div>
                    <FormMessage className="text-red-600" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="domisili"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel
                      htmlFor="domisili"
                      className="text-base font-medium text-white"
                    >
                      Domisili :
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="domisili"
                        aria-describedby="domisili"
                        placeholder="cth : Yogyakarta"
                        {...field}
                        className="rounded-[5px] py-6 bg-nenda-dark-blue text-white placeholder:text-[#203D53] focus:outline-nenda-orange"
                      />
                    </FormControl>
                    <FormMessage className="text-red-600" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="textBox"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel
                      htmlFor="textbox"
                      className="text-base font-medium text-white"
                    >
                      TextBox :
                    </FormLabel>
                    <FormControl>
                      <textarea
                        id="textbox"
                        aria-describedby="textbox"
                        placeholder="cth : Ye"
                        {...field}
                        className="w-full rounded-[5px] bg-nenda-dark-blue p-3 text-white outline-none placeholder:text-[#203D53] h-32 block focus:outline-nenda-orange"
                      />
                    </FormControl>
                    <FormMessage className="text-red-600" />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className={`px-12 py-6 text-white rounded-full bg-nenda-orange ${
                  loading ? 'opacity-50' : ''
                }`}
                disabled={loading ? true : false}
              >
                Kirim
                {loading ? (
                  <svg
                    aria-hidden="true"
                    role="status"
                    className="inline w-4 h-4 ml-3 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                ) : null}
              </Button>
            </form>
          </Form>
          <p className="mt-5 text-white">
            Sudah punya akun?{' '}
            <Link href={'/user/login'}>
              <span className="font-semibold text-nenda-orange hover:underline">
                Klik Disini
              </span>
            </Link>
          </p>
        </div>
        <div className="hidden w-full md:block">
          <div className="mx-auto w-[400px] h-[300px]">
            <Image
              src={NendaLogo}
              alt="NendaLogo"
              className="object-cover w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserRegisterPage
