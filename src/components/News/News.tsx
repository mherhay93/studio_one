import {useEffect} from "react";
import {useSelector} from "react-redux";
import CardNews from "../resusable/CardNews/CardNews";
import {useFetchData} from "../../api/useFetchData";
import {getData, getFilterData} from "../../store/newsData/selectors";
import classes from './styleNews.module.css'

const News = () => {

  const dataNews = useSelector(getData)
  const filterData = useSelector(getFilterData)
  const {fetchData} = useFetchData()
  const isAutInLocalStorage = localStorage.isAut && JSON.parse(localStorage.isAut)

  console.log(dataNews)

  useEffect(() => {
    fetchData()
  }, [])

  let paintData = filterData.length ? filterData : dataNews

  return (
  <div className={classes.container}>
    {paintData.map(item =>(
    <CardNews
    isAut={isAutInLocalStorage}
    key={item.id} title={item.title}
    description={item.description}
    image={item.image}
    comments={item.comments}
    id={item.id}
    fibNum={item.fibNum}/>
    ))}
  </div>
  )
}

export default News