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
import { signIn, useSession } from 'next-auth/react'
import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'

const UserLoginPage: FC = () => {
  const { data: session } = useSession()
  const { toast } = useToast()
  const [show, setShow] = useState<boolean>(false)
  const router = useRouter()
  const form = useForm<z.infer<typeof LoginValidator>>({
    resolver: zodResolver(LoginValidator),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()
  const onSubmit = async (value: any) => {
    signIn('credentials', {
      email: value.email,
      password: value.password,
      redirect: false
    }).then(res => {
      if (res?.error) {
        toast({
          variant: 'failed',
          description: 'Email Or Password Wrong'
        })
      } else {
        toast({
          variant: 'success',
          description: 'Success to login'
        })
        router.push('/')
      }
    })
  }

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
                        placeholder="cth : nama@gmail.com"
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
                      Password :
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
