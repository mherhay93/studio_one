import {useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";
import {getUsers, setIsAut} from "../store/newsData/news";
import {IUser, StatusFetch} from "../types";
import {loginPaths, pages} from "../constants";

interface IFetchUser {
  name: string,
  password: string
}

export const useFetchUsers = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [status, setStatus] = useState('')
  const fetchUsers = ({name, password}: IFetchUser) => {
    fetch('https://63e2578b3e12b193763da686.mockapi.io/login')
    .then((response) => response.json())
    .then((data: IUser[]) => {

      const user = data.splice(1).filter(item => item.name === name && item.password === password)

      if (!user.length) {
        setStatus(StatusFetch.ERROR)
      } else {
        setStatus(StatusFetch.SUCCESS)
        dispatch(setIsAut(true))
        navigate(loginPaths[0].path)
      }
      dispatch(getUsers(user[0]))
    })
    .catch(() => setStatus(StatusFetch.ERROR));
  }

  return {fetchUsers, status}
}