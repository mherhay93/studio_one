import {useDispatch} from "react-redux";
import {getDataNews} from "../store/newsData/news";

export const useFetchData = () => {
  const dispatch = useDispatch()

  const fetchData = () => {
    fetch('https://63e2578b3e12b193763da686.mockapi.io/news')
    .then((response) => response.json())
    .then((data) => dispatch(getDataNews(data)))
    .catch(() => console.log('oops'));
  }

  return {fetchData}
}