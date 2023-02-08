import {IReduce} from "../../types";

export const getData = (state:IReduce) => state.news.news
export const getFilterData = (state:IReduce) => state.news.filterData
export const getUser = (state:IReduce) => state.news.user
export const getIsAut = (state:IReduce) => state.news.isAut