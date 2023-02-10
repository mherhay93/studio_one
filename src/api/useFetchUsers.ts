import {useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";
import {getUsers, setIsAut} from "../store/newsData/news";
import {IUser, StatusFetch} from "../types";
import {api, loginPaths} from "../constants";

interface IFetchUser {
  name: string,
  password: string
}

export const useFetchUsers = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [status, setStatus] = useState('')
  const fetchUsers = ({name, password}: IFetchUser) => {
    fetch(`${api}/login`)
    .then((response) => response.json())
    .then((data: IUser[]) => {
      const user = data.filter(item => item.name === name && item.password === password)

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
