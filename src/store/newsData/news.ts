import {createSlice} from "@reduxjs/toolkit";
import {IState} from "../../types";

const initialState: IState = {
  news: [],
  user: {
    name: '',
    password: '',
    username: '',
    id: '',
    follows: [],
    knownIps: [],
  }
}

export const news = createSlice({
  name: 'news',
  initialState,
  reducers: {
    getDataNews: (state, action) => {
      state.news = action.payload
    },
    getUsers: (state, action) => {
      state.user = action.payload
    }

  }
})

export const {
  getDataNews,
  getUsers
} = news.actions