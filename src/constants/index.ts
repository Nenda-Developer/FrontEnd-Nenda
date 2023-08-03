import HikerUser from '@/assets/icons/user.svg'
import ContributorUser from '@/assets/icons/contributor.svg'
import VendorUser from '@/assets/icons/vendor.svg'
import { IOption } from '@/types'

export const OPTIONS: IOption[] = [
  {
    id: 1,
    role: 'Pendaki Umum',
    icon: HikerUser,
    description: 'Lorem ipsum dolor sit amet consectetur.',
    loginDestination: '/user/login',
    registerDestination: '/user/register'
  },
  {
    id: 2,
    role: 'Kontributor',
    icon: ContributorUser,
    description: 'Lorem ipsum dolor sit amet consectetur.',
    loginDestination: '/contributor/login',
    registerDestination: '/contributor/register'
  },
  {
    id: 3,
    role: 'Vendor',
    icon: VendorUser,
    description: 'Lorem ipsum dolor sit amet consectetur.',
    loginDestination: '/vendor/login',
    registerDestination: '/vendor/register'
  }
]
