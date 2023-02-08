export interface IPages {
  name: string,
  path: string
}

export interface IState {
  news: INews[],
  filterData: INews[],
  user: IUser,
  isAut: boolean
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
  fibNum?: number,
  prim?: string
}

export interface IReduce {
  news: IState
}

export enum StatusFetch {
  'SUCCESS' = 'SUCCESS',
  'ERROR' = 'ERROR'
}