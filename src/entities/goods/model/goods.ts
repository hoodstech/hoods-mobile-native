import type { SizeItem } from './sizes'

export interface Good {
  id: number
  profileImg: string
  title: string
  description: string
  sizes: SizeItem[]
  price: number
}