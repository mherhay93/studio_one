import CardNews from "../resusable/CardNews/CardNews";
import {useFetchData} from "../../api/useFetchData";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {getData} from "../../store/newsData/selectors";
import classes from './styleNews.module.css'

const News = () => {

  const dataNews = useSelector(getData)
  const {fetchData} = useFetchData()
  console.log(dataNews)

  useEffect(() => {
    fetchData()
  }, [])

  let paintData = dataNews && dataNews

  return (
  <div className={classes.container}>
    {paintData.map(item => <CardNews key={item.id} title={item.title} description={item.description} image={item.image} comments={item.comments} id={item.id}/>)}
  </div>
  )
}

export default News