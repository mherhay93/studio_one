import {useState} from "react";
import {StatusFetch} from "../types";
import {useFetchData} from "./useFetchData";

interface IAddNews {
  title:string,
  description:string
  image:any
}

export const useFetchAddNews = () => {
  const [status, setStatus] = useState('')

  const {fetchData} = useFetchData()
  const fetchAddNews = ({title, description, image}:IAddNews) => {
    fetch('https://63e2578b3e12b193763da686.mockapi.io/news', {
      method:'POST',
      body: JSON.stringify({
        title,
        description,
        image
      })
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data, 'data')
      setStatus(StatusFetch.SUCCESS)
      fetchData()
    }
    )
    .catch(() => setStatus(StatusFetch.ERROR));
  }

  return {fetchAddNews, status}
}