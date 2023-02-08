import {createSlice} from "@reduxjs/toolkit";
import {IState} from "../../types";

const initialState: IState = {
  news: [],
  filterData:[],
  user: {
    name: '',
    password: '',
    username: '',
    id: '',
    follows: [],
    knownIps: [],
  },
  isAut: false
}

export const news = createSlice({
  name: 'news',
  initialState,
  reducers: {
    getDataNews: (state, action) => {
      return {...state, news: action.payload}
    },
    getUsers: (state, action) => {
      localStorage.user = JSON.stringify(action.payload)
      return {...state, user: action.payload}

    },
    setIsAut: (state, action) => {
      localStorage.isAut = JSON.stringify(action.payload)
      return {...state, isAut: action.payload}
    },
    search: (state, action) => {
      const searchObj = action.payload
      let data = state.news.filter(item => item?.title === searchObj.searchText || item?.prim === searchObj.picked)
      return {...state, filterData:data}
    }

  }
})

export const {
  getDataNews,
  getUsers,
  setIsAut,
search
} = news.actions