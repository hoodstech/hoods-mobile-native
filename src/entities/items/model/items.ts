import type { SizeItem } from './sizes'

export interface Item {
  id: number
  profileImg: string
  title: string
  description: string
  characteristics?: string[]
  sizes?: SizeItem[]
  price: number
}