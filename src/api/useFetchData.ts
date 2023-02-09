import {useDispatch} from "react-redux";
import {getDataNews} from "../store/newsData/news";
import {INews} from "../types";
import isPrime from "./isPrime";
import {api} from "../constants";

export const useFetchData = () => {
  const dispatch = useDispatch()

  const fetchData = () => {
    let start = 0;
    let end = 1;
    let fibNum = 1
    let prim
    fetch(`${api}/news`)
    .then((response) => response.json())
    .then((data) => {
      let dataNews = data.map((item: INews, index: number) => {
        if(index >= 2){
          start = end;
          end = fibNum;
          fibNum = start + end;
        }

        prim = isPrime(fibNum)
        return {...item, fibNum, prim}
      })

      dispatch(getDataNews(dataNews))
    }
    )
    .catch(() => console.log('oops'));
  }

  return {fetchData}
}
