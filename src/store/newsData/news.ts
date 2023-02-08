import { createSlice } from "@reduxjs/toolkit";
import {IState} from "../../types";

const initialState:IState = {
  news:[]
}

export const news = createSlice( {
  name: 'news',
  initialState,
  reducers: {
    getDataNews:(state, action) => {
      state.news = action.payload
    }

  }
} )

export const {
  getDataNews
} = news.actions