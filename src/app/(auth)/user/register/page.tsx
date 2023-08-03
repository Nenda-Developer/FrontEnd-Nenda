'use client'

import React, { FC } from 'react'
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

const UserRegisterPage: FC = () => {
  const form = useForm<z.infer<typeof RegisterValidator>>({
    resolver: zodResolver(RegisterValidator),
    defaultValues: {
      username: '',
      email: '',
      domisili: '',
      textBox: ''
    }
  })
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()
  const onSubmit = (data: any) => console.log(data)

  return (
    <div className="w-full h-full">
      <div className="flex items-center justify-center w-full max-w-5xl min-h-screen mx-auto">
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
                    <FormLabel className="text-base font-medium text-white">
                      Nama Lengkap :
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
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium text-white">
                      Email :
                    </FormLabel>
                    <FormControl>
                      <Input
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
                name="domisili"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium text-white">
                      Domisili :
                    </FormLabel>
                    <FormControl>
                      <Input
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
                    <FormLabel className="text-base font-medium text-white">
                      TextBox :
                    </FormLabel>
                    <FormControl>
                      <textarea
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
        <div className="w-full">
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
