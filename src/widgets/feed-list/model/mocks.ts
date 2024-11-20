import type { Good } from '~/entities/goods/model'

export const GOODS_MOCKS: Good[] = [
  {
    id: 1,
    profileImg: 'https://m.media-amazon.com/images/I/71gEWlwpN9L._AC_SX569_.jpg',
    title: 'Худи 1',
    description: '123123123',
    price: 16_500_00,
    sizes: [{
      name: 'm',
      isAvailable: false,
    },
    {
      name: 'l',
      isAvailable: true,
    },
    {
      name: 'xl',
      isAvailable: true,
    }],
  },
  {
    id: 2,
    profileImg: 'https://m.media-amazon.com/images/I/71gEWlwpN9L._AC_SX569_.jpg',
    title: 'Худи 2',
    description: '123123123',
    price: 7_000_00,
    sizes: [],
  },
  {
    id: 3,
    profileImg: 'https://m.media-amazon.com/images/I/71gEWlwpN9L._AC_SX569_.jpg',
    title: 'Худи 3',
    description: '123123123',
    price: 8_000_00,
    sizes: [],
  },
  {
    id: 4,
    profileImg: 'https://m.media-amazon.com/images/I/71gEWlwpN9L._AC_SX569_.jpg',
    title: 'Худи 4',
    description: '123123123',
    price: 7_000_00,
    sizes: [],
  },
  {
    id: 5,
    profileImg: 'https://m.media-amazon.com/images/I/71gEWlwpN9L._AC_SX569_.jpg',
    title: 'Худи 5',
    price: 7_500_00,
    description: '123123123',
    sizes: [],
  },
]