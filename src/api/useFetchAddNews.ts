import {useState} from "react";
import {StatusFetch} from "../types";
import {useFetchData} from "./useFetchData";
import {api} from "../constants";

interface IFetchValue {
  title: string,
  description: string,
  image: string
}


export const useFetchAddNews = () => {
  const [status, setStatus] = useState('')

  const {fetchData} = useFetchData()
  const fetchAddNews = (values: IFetchValue) => {
    fetch(`${api}/news`, {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.json())
    .then(() => {
      setStatus(StatusFetch.SUCCESS)
      fetchData()
    }
    )
    .catch(() => setStatus(StatusFetch.ERROR));
  }

  return {fetchAddNews, status}
}
