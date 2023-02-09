import {IPages} from "../types";

export const api = 'https://63e52ef78e1ed4ccf6efa8d2.mockapi.io'

export const pages: IPages[] = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'News',
    path: '/news'
  },
]

export const loginPaths: IPages[] = [
  {
    name: 'Profile',
    path: '/profile'
  },
  {
    name: 'Login',
    path: '/login'
  }
]

export const textHome = 'Hello! do you want to know news'
