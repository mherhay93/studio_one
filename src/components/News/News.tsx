import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import CardNews from "../resusable/CardNews/CardNews";
import {useFetchData} from "../../api/useFetchData";
import {getData, getFilterData} from "../../store/newsData/selectors";
import Modal from "../resusable/Modal/Modal";
import ConfirmModal from "../resusable/ConfirmModal/ConfirmModal";
import {useFetchDelete} from "../../api/useFetchDelete";
import classes from './styleNews.module.css'

const News = () => {

  const dataNews = useSelector(getData)
  const filterData = useSelector(getFilterData)
  const {fetchData} = useFetchData()
  const {fetchDelete} = useFetchDelete()
  const isAutInLocalStorage = localStorage.isAut && JSON.parse(localStorage.isAut)

  const [isModal, setIsModal] = useState(false)
  const [idDel, setIdDel] = useState('')

  let paintData = filterData.length ? filterData : dataNews

  const handleOpenModal = (id: string) => {
    setIsModal(true)
    setIdDel(id)
  }

  const handleCloseModal = () => {
    setIsModal(false)
  }

  const handleDelete = (id: string) => {
    fetchDelete(id)
  }

  console.log(isModal)

  useEffect(() => {
    fetchData()
  }, [])

  return (
  <div className={classes.container}>
    {paintData.map(item => (
    <CardNews
    isAut={isAutInLocalStorage}
    key={item.id} title={item.title}
    description={item.description}
    image={item.image}
    comments={item.comments}
    id={item.id}
    fibNum={item.fibNum}
    handleOpenModal={handleOpenModal}
    />
    ))}
    <Modal isModal={isModal} handleCloseModal={handleCloseModal}
           children={<ConfirmModal id={idDel} handleDelete={handleDelete} closeModal={handleCloseModal}/>}/>
  </div>
  )
}

export default News