import {useState} from "react";
import {StatusFetch} from "../types";
import {useFetchData} from "./useFetchData";

export const useFetchDelete = () => {
  const [status, setStatus] = useState('')
  const {fetchData} = useFetchData()
  const fetchDelete = (id: string) => {
    fetch(`https://63e2578b3e12b193763da686.mockapi.io/news/${id}`, {
      method: 'DELETE'
    })
    .then((response) => response.json())
    .then((data) => {
      setStatus(StatusFetch.SUCCESS)
      fetchData()
    })
    .catch(() => setStatus(StatusFetch.ERROR));
  }

  return {fetchDelete, status}
}