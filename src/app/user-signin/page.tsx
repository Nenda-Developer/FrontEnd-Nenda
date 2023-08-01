'use client'

import React, { FC, useState } from 'react'
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
import EyeOff from '@/assets/icons/eye-off.svg'
import EyeOn from '@/assets/icons/eye-on.svg'
import { LoginValidator } from '@/lib/validators/login'

const UserLoginPage: FC = () => {
  const [show, setShow] = useState<boolean>(false)
  const form = useForm<z.infer<typeof LoginValidator>>({
    resolver: zodResolver(LoginValidator),
    defaultValues: {
      username: '',
      password: ''
    }
  })
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()
  const onSubmit = (data: any) => console.log(data)

  const showHandler = () => {
    setShow(!show)
  }

  return (
    <div className="w-full h-full">
      <div className="flex items-center justify-center w-full max-w-5xl min-h-screen mx-auto">
        <div className="w-full px-5">
          <h1 className="font-medium text-white  md:w-fit md:text-[28px] text-start mb-8">
            <span className="text-nenda-orange">Masuk Sebagai </span>
            Pendaki Umum
          </h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium text-white">
                      ID Pengguna :
                    </FormLabel>
                    <FormControl>
                      <Input
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
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium text-white">
                      Password :
                    </FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input
                          type={show ? 'password' : 'text'}
                          placeholder="_____________"
                          {...field}
                          className="rounded-[5px] py-6 bg-nenda-dark-blue text-white placeholder:text-[#203D53] focus:outline-nenda-orange"
                        />
                      </FormControl>
                      <Image
                        src={show ? EyeOff : EyeOn}
                        alt="eyeoff"
                        className="absolute cursor-pointer right-5 top-[30%]"
                        onClick={showHandler}
                      />
                    </div>
                    <FormMessage className="text-red-600" />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="px-12 py-6 text-white rounded-full bg-nenda-orange"
              >
                Kirim
              </Button>
            </form>
          </Form>
          <p className="mt-5 text-white">
            Belum Punya Akun?{' '}
            <span className="font-semibold text-nenda-orange">Klik Disini</span>
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

export default UserLoginPage
