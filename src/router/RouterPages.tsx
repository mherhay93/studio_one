import routs from "./routs";
import {getIsAut} from "../store/newsData/selectors";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {setIsAut} from "../store/newsData/news";

const RouterPages = () => {
  const dispatch = useDispatch()
  const isAutInStore = useSelector(getIsAut)
  const isAutInLocalStorage = localStorage.isAut && JSON.parse(localStorage.isAut)

  let isAut = isAutInLocalStorage || isAutInStore

  useEffect(() => {
    isAutInLocalStorage && dispatch(setIsAut(true))
  }, [])

  return (
  routs(isAut)
  )
}

export default RouterPages