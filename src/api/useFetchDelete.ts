import {useState} from "react";
import {StatusFetch} from "../types";
import {useFetchData} from "./useFetchData";
import {api} from "../constants";

export const useFetchDelete = () => {
  const [status, setStatus] = useState('')
  const {fetchData} = useFetchData()
  const fetchDelete = (id: string) => {
    fetch(`${api}/news/${id}`, {
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
