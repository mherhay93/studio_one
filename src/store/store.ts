import { configureStore } from "@reduxjs/toolkit";
import { news } from "./newsData/news";

export function makeStore () {
  return configureStore( {
    reducer: {
      [news.name]:news.reducer
    }
  } )
}

const store = makeStore()
export default store