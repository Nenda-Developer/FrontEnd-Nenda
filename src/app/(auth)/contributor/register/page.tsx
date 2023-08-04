'use client'

import React, { ChangeEvent, FC, useContext, useEffect, useState } from 'react'
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
import { AuthUserRegisterContext } from '@/context/AuthContext'
import { AuthRegisterUserType } from '@/types'
import EyeOff from '@/assets/icons/eye-off.svg'
import EyeOn from '@/assets/icons/eye-on.svg'

const ContributorRegisterPage: FC = () => {
  const [show, setShow] = useState<boolean>(false)
  const [termChecked, setTermChecked] = useState<boolean>(false)
  const [showConfirm, setShowConfirm] = useState<boolean>(false)
  const [page, setPage] = useState<number>(0)
  const [formData, setFormData] = useState<any>({})
  const [query, setQuery] = useState<string>('')
  const [select, setSelect] = useState<string[]>([])
  const [isFocus, setIsFocus] = useState<boolean>(false)
  const [consume, setConsume] = useState<boolean>(false)
  const { handleContributorRegister, loading } = useContext(
    AuthUserRegisterContext
  ) as AuthRegisterUserType

  const formStepOne = useForm<z.infer<typeof ContributorRegisterValidator>>({
    resolver: zodResolver(ContributorRegisterValidator),
    defaultValues: {
      username: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: ''
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

  const onSubmit = (value: any) => {
    setPage(page + 1)
    setFormData({ ...formData, ...value })
    if (
      formData.username &&
      formData.email &&
      formData.password &&
      formData.confirmPassword &&
      formData.phoneNumber &&
      formData.profession &&
      formData.organization &&
      select
    ) {
      setConsume(true)
    } else {
      return
    }
    if (page === 2) {
      setPage(2)
      return page
    }
  }

  const handleTermChecked = (e: ChangeEvent<HTMLInputElement>) => {
    setTermChecked(e.target.checked)
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

  const showHandler = () => {
    setShow(!show)
  }

  const showConfirmHandler = () => {
    setShowConfirm(!showConfirm)
  }

  useEffect(() => {
    if (consume) {
      handleContributorRegister(
        formData.username,
        formData.email,
        formData.password,
        formData.confirmPassword,
        formData.phoneNumber,
        formData.profession,
        formData.organization,
        select
      )
    }
  }, [consume])

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
                  control={formStepOne.control}
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
                <Button
                  type="submit"
                  className={`px-12 py-6 w-full text-white rounded-full bg-nenda-orange ${
                    loading ? 'opacity-50' : ''
                  }`}
                  disabled={
                    !termChecked ? true : false || loading ? true : false
                  }
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
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name=""
                    id=""
                    checked={termChecked}
                    onChange={handleTermChecked}
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
