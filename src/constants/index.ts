import HikerUser from '@/assets/icons/user.svg'
import ContributorUser from '@/assets/icons/contributor.svg'
import VendorUser from '@/assets/icons/vendor.svg'

interface IOption {
  id: number
  role: string
  icon: string
  description: string
}

export const OPTIONS: IOption[] = [
  {
    id: 1,
    role: 'Pendaki Umum',
    icon: HikerUser,
    description: 'Lorem ipsum dolor sit amet consectetur.'
  },
  {
    id: 2,
    role: 'Kontributor',
    icon: ContributorUser,
    description: 'Lorem ipsum dolor sit amet consectetur.'
  },
  {
    id: 3,
    role: 'Vendor',
    icon: VendorUser,
    description: 'Lorem ipsum dolor sit amet consectetur.'
  }
]
