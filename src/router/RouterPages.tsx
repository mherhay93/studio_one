import routs from "./routs";
import {getIsAut} from "../store/newsData/selectors";
import {useSelector} from "react-redux";

const RouterPages = () => {
  const isAutInStore = useSelector(getIsAut)
  const isAutInLocalStorage = localStorage.isAut && JSON.parse(localStorage.isAut)

  const isAut = isAutInLocalStorage || isAutInStore

  return (
  routs(isAut)
  )
}

export default RouterPages