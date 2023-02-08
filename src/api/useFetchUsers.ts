import {useDispatch} from "react-redux";
import {getUsers} from "../store/newsData/news";
import {IUser, StatusFetch} from "../types";
import {useState} from "react";

interface IFetchUser {
  name: string,
  password: string
}

export const useFetchUsers = () => {
  const dispatch = useDispatch()
  const [status, setStatus] = useState('')
  const fetchUsers = ({name, password}: IFetchUser) => {
    fetch('https://63e2578b3e12b193763da686.mockapi.io/login')
    .then((response) => response.json())
    .then((data: IUser[]) => {
      const user = data.splice(1).filter(item => item.name === name && item.password === password)
      if(!user.length){
        setStatus(StatusFetch.ERROR)
      } else {
        setStatus(StatusFetch.SUCCESS)
      }
      dispatch(getUsers(user))
    })
    .catch(() => setStatus(StatusFetch.ERROR));
  }

  return {fetchUsers, status}
}