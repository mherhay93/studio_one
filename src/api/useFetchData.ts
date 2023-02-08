import {useDispatch} from "react-redux";
import {getDataNews} from "../store/newsData/news";
import {INews} from "../types";

export const useFetchData = () => {
  const dispatch = useDispatch()

  const fetchData = () => {
    let start = 0;
    let end = 1;
    let fibNum = 1
    fetch('https://63e2578b3e12b193763da686.mockapi.io/news')
    .then((response) => response.json())
    .then((data) => {
      let dataNews = data.map((item: INews, index: number) => {
        if(index >= 2){
          start = end;
          end = fibNum;
          fibNum = start + end;
        }
        return {...item, fibNum}
      })

      dispatch(getDataNews(dataNews))
    }
    )
    .catch(() => console.log('oops'));
  }

  return {fetchData}
}