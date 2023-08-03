'use client'

import React, { ChangeEvent, FC, useRef, useState } from 'react'
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
  VendorRegisterStepThreeValidator,
  VendorRegisterStepTwoValidator,
  VendorRegisterValidator
} from '@/lib/validators/register'
import { ArrowNext, Upload } from '@/lib/utils/icon'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

const VendorRegisterPage: FC = () => {
  const [page, setPage] = useState<number>(0)
  const [formData, setFormData] = useState<any>({})
  const ref = useRef<HTMLInputElement>(null)
  const [selected, setSelected] = useState<File[]>([])

  const formStepOne = useForm<z.infer<typeof VendorRegisterValidator>>({
    resolver: zodResolver(VendorRegisterValidator),
    defaultValues: {
      shopName: '',
      shopOwner: '',
      NIKOwner: ''
    }
  })
  const formStepTwo = useForm<z.infer<typeof VendorRegisterStepTwoValidator>>({
    resolver: zodResolver(VendorRegisterStepTwoValidator),
    defaultValues: {
      address: '',
      email: '',
      phoneNumber: ''
    }
  })
  const formStepThree = useForm<
    z.infer<typeof VendorRegisterStepThreeValidator>
  >({
    resolver: zodResolver(VendorRegisterStepThreeValidator)
  })

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm()

  const onSubmit = (data: any) => {
    setPage(page + 1)
    setFormData({ ...formData, ...data })
  }

  const handleClick = () => {
    ref.current?.click()
  }

  const onVendorLogoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0]
    const fileSelected = Array.from(e.currentTarget.files ?? [])
    formStepThree.setValue('vendorLogo', file)
    setSelected(fileSelected)
  }

  return (
    <div className="w-full h-full">
      <div className="flex items-center justify-center w-full max-w-5xl min-h-screen mx-auto px-5 md:px-0">
        <div className="w-full">
          <h1 className="font-medium text-white  md:w-fit md:text-[28px] text-start mb-8">
            <span className="text-nenda-orange">Daftar Sebagai </span>
            Vendor Nenda
          </h1>
          {page === 0 && (
            <Form {...formStepOne}>
              <form
                onSubmit={formStepOne.handleSubmit(onSubmit)}
                className="space-y-5"
              >
                <FormField
                  control={formStepOne.control}
                  name="shopName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium text-white">
                        Nama Toko :
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
                  name="shopOwner"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium text-white">
                        Nama Pemilik Toko :
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
                  name="NIKOwner"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium text-white">
                        NIK Pemilik :
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
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium text-white">
                        Alamat :
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
                <FormField
                  control={formStepTwo.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium text-white">
                        Email :
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="cth : fajarmalik@gmail.com"
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
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium text-white">
                        No Whatsapp :
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="cth : 0895783740293"
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
            <Form {...formStepThree}>
              <form
                onSubmit={formStepThree.handleSubmit(onSubmit)}
                className="space-y-5"
              >
                <FormField
                  control={formStepThree.control}
                  name="shopScale"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium text-white">
                        Skala Toko :
                      </FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem
                                value="mikro"
                                className="w-4 h-4 border rounded-full border-nenda-orange"
                              />
                            </FormControl>
                            <FormLabel className="font-normal text-white text-base">
                              Mikro
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem
                                value="menengah"
                                className="w-4 h-4 border rounded-full border-nenda-orange"
                              />
                            </FormControl>
                            <FormLabel className="font-normal text-white text-base">
                              Menengah
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem
                                value="besar"
                                className="w-4 h-4 border rounded-full border-nenda-orange"
                              />
                            </FormControl>
                            <FormLabel className="font-normal text-white text-base">
                              Besar
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage className="text-red-600" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={formStepThree.control}
                  name="vendorLogo"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex flex-col gap-y-2">
                        <FormLabel className="text-base font-medium text-white">
                          Logo Vendor :
                        </FormLabel>
                        <div onClick={handleClick}>
                          <div
                            className="rounded-[5px] text-xs py-2 w-full bg-nenda-dark-blue text-white focus:outline-nenda-orange flex justify-end px-3 relative"
                            placeholder="tedsfdsfdss"
                          >
                            <div className="bg-[#203D53] space-x-2 p-3 rounded-[6px] cursor-pointer z-50">
                              <div className="inline">Upload Foto</div>
                              <Image
                                src={Upload}
                                alt="upload icon"
                                className="inline"
                              />
                            </div>
                            {!!selected.length ? (
                              <div>
                                {selected.map((file, i) => {
                                  return (
                                    <span
                                      className="absolute left-5 top-[29%] text-base z-0 overflow-hidden line-clamp-1"
                                      key={i}
                                    >
                                      {file.name}
                                    </span>
                                  )
                                })}
                              </div>
                            ) : (
                              <span className="absolute left-5 top-[30%] text-[#203D53] text-base">
                                Cari File
                              </span>
                            )}
                          </div>
                          <FormControl>
                            <input
                              type="file"
                              ref={ref}
                              onChange={onVendorLogoChange}
                              className="hidden rounded-[5px] bg-nenda-dark-blue text-white placeholder:text-[#203D53] focus:outline-nenda-orange file:bg-red-500 file:mx-3"
                            />
                          </FormControl>
                        </div>
                      </div>
                      <FormMessage className="text-red-600">
                        {formStepThree.formState.errors?.vendorLogo?.message}
                      </FormMessage>
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="px-12 py-6 !mt-8 text-white rounded-full bg-nenda-orange w-full hover:bg-opacity-50"
                >
                  Kirim
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
        <div className="w-full hidden md:block">
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

export default VendorRegisterPage
