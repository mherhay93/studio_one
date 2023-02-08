export interface IPages {
  name: string,
  path: string
}

export interface IState {
  news:INews[]
}

export interface INews {
  title: string,
  description: string,
  image: string,
  comments: string,
  id: string
}

export interface IReduce {
  news:IState
}