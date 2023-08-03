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
import {
  ContributorRegisterStepTwoValidator,
  ContributorRegisterValidator
} from '@/lib/validators/register'
import { ArrowNext, Search } from '@/lib/utils/icon'
import { MOUNTAIN } from '@/constants'

const ContributorRegisterPage: FC = () => {
  const [page, setPage] = useState<number>(0)
  const [formData, setFormData] = useState<any>({})
  const [query, setQuery] = useState<string>('')
  const [select, setSelect] = useState<string[]>([])
  const [isFocus, setIsFocus] = useState<boolean>(false)

  const formStepOne = useForm<z.infer<typeof ContributorRegisterValidator>>({
    resolver: zodResolver(ContributorRegisterValidator),
    defaultValues: {
      username: '',
      email: '',
      phoneNumber: ''
    }
  })
  const formStepTwo = useForm<
    z.infer<typeof ContributorRegisterStepTwoValidator>
  >({
    resolver: zodResolver(ContributorRegisterStepTwoValidator),
    defaultValues: {
      profession: '',
      organization: ''
    }
  })
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()

  const onSubmit = (data: any) => {
    setPage(page + 1)
    setFormData({ ...formData, ...data })
  }

  const handleInputFocus = () => {
    setIsFocus(true)
  }

  const handleSelect = (mountainName: string) => {
    const isAlreadySelected = select.includes(mountainName)

    if (!isAlreadySelected) {
      setSelect(prevSelect => [...prevSelect, mountainName])
    }
    setQuery('')
    setIsFocus(false)
  }

  return (
    <div className="w-full h-full">
      <div className="flex items-center justify-center w-full max-w-5xl min-h-screen mx-auto">
        <div className="w-full">
          <h1 className="font-medium text-white  md:w-fit md:text-[28px] text-start mb-8">
            <span className="text-nenda-orange">Daftar Sebagai </span>
            Kontributor Nenda
          </h1>
          {page === 0 && (
            <Form {...formStepOne}>
              <form
                onSubmit={formStepOne.handleSubmit(onSubmit)}
                className="space-y-5"
              >
                <FormField
                  control={formStepOne.control}
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
                  control={formStepOne.control}
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
                  control={formStepOne.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium text-white">
                        No Whatsapp :
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
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <div className="w-[10px] h-[10px] transition duration-500 scale-125 rounded-full bg-nenda-orange animate-scale"></div>
                    <div className="w-[10px] h-[10px] rounded-full bg-[#404040]"></div>
                    <div className="w-[10px] h-[10px] rounded-full bg-[#404040]"></div>
                  </div>
                  <Button type="submit" variant="nendaPrimary">
                    Selanjutnya{' '}
                    <Image
                      src={ArrowNext}
                      alt="arrowNext"
                      className="w-3 h-3 ml-3"
                    />
                  </Button>
                </div>
              </form>
            </Form>
          )}
          {page === 1 && (
            <Form {...formStepTwo}>
              <form
                onSubmit={formStepTwo.handleSubmit(onSubmit)}
                className="space-y-5"
              >
                <FormField
                  control={formStepTwo.control}
                  name="profession"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium text-white">
                        Profesi :
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="cth : Programmer"
                          {...field}
                          className="rounded-[5px] py-6 bg-nenda-dark-blue text-white placeholder:text-[#203D53] focus:outline-nenda-orange"
                        />
                      </FormControl>
                      <FormMessage className="text-red-600" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={formStepTwo.control}
                  name="organization"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium text-white">
                        Organisasi Pendakian :
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="cth : Mayapala Amikom"
                          {...field}
                          className="rounded-[5px] py-6 bg-nenda-dark-blue text-white placeholder:text-[#203D53] focus:outline-nenda-orange"
                        />
                      </FormControl>
                      <FormMessage className="text-red-600" />
                    </FormItem>
                  )}
                />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <div className="w-[10px]  h-[10px]  rounded-full bg-[#404040]"></div>
                    <div className="w-[10px] h-[10px] transition duration-500 scale-125 rounded-full bg-nenda-orange animate-scale"></div>
                    <div className="w-[10px] h-[10px] rounded-full bg-[#404040]"></div>
                  </div>
                  <Button type="submit" variant="nendaPrimary">
                    Selanjutnya{' '}
                    <Image
                      src={ArrowNext}
                      alt="arrowNext"
                      className="w-3 h-3 ml-3"
                    />
                  </Button>
                </div>
              </form>
            </Form>
          )}
          {page === 2 && (
            <Form {...formStepTwo}>
              <form
                onSubmit={formStepTwo.handleSubmit(onSubmit)}
                className="space-y-5"
              >
                <FormField
                  control={formStepTwo.control}
                  name="profession"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium text-white">
                        Gunung Yang Pernah Didaki :
                      </FormLabel>
                      <div>
                        <div className="relative">
                          <FormControl>
                            <input
                              placeholder="cth : Gunung Sindoro"
                              value={query}
                              onChange={e =>
                                setQuery(e.target.value.toLowerCase())
                              }
                              onFocus={handleInputFocus}
                              className="rounded-[5px] px-5 py-3 bg-nenda-dark-blue text-white placeholder:text-[#203D53] focus:outline-nenda-orange w-full"
                            />
                          </FormControl>
                          <Image
                            src={Search}
                            alt="search"
                            className="absolute cursor-pointer right-5 top-[30%]"
                          />
                        </div>
                        {isFocus && query.split('').length > 0 && (
                          <div className="bg-white" onFocus={handleInputFocus}>
                            {MOUNTAIN.filter(mount =>
                              mount.mountainName.toLowerCase().includes(query)
                            ).map(m => (
                              <div
                                className={`cursor-pointer hover:bg-red-300 ${
                                  select.includes(m.mountainName)
                                    ? 'opacity-50 pointer-events-none'
                                    : ''
                                }`}
                                key={m.id}
                                onClick={() => handleSelect(m.mountainName)}
                              >
                                {m.mountainName}
                              </div>
                            ))}
                          </div>
                        )}
                        {select.length > 0 && (
                          <div className="grid grid-cols-3 gap-3 mt-5">
                            {select.map((item, i) => (
                              <div key={i}>
                                <p className="px-5 py-3 text-xs rounded-full text-nenda-orange bg-nenda-dark-blue">
                                  {item}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      <FormMessage className="text-red-600" />
                    </FormItem>
                  )}
                />
                <Button type="submit" variant="nendaPrimary" className="w-full">
                  Kirim{' '}
                </Button>
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name=""
                    id=""
                    className="w-5 h-4 border-2 rounded-full appearance-none checked:bg-nenda-orange border-nenda-orange"
                  />
                  <p className="mt-5 text-white">
                    Sebelum mendaftar sebagai pengguna, Anda harus menyetujui
                    <span className="ml-1 font-semibold text-nenda-orange">
                      Syarat & ketentuan
                    </span>
                  </p>
                </div>
              </form>
            </Form>
          )}
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

export default ContributorRegisterPage
