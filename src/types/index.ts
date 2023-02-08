export interface IPages {
  name: string,
  path: string
}

export interface IState {
  news: INews[],
  user: IUser,
  isAut:boolean
}

export interface IUser {

  name: string,
  password: string,
  username: string,
  knownIps: string[],
  follows: string[],
  id: string,


}

export interface INews {
  title: string,
  description: string,
  image: string,
  comments: string[],
  id: string,
  fibNum?:number
}

export interface IReduce {
  news: IState,
  user: IUser,
  isAut:boolean
}

export enum StatusFetch {
  'SUCCESS'='SUCCESS',
  'ERROR'='ERROR'
}