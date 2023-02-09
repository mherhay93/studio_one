import {GrClose} from "react-icons/gr"
import {INews} from "../../../types";
import IsPrimeNumber from "../IsPrime/IsPrimeNumber";
import classes from './styleCard.module.css'


interface ICardNews extends INews {
  isAut: boolean,
  handleOpenModal: (id: string) => void,
}

const CardNews = ({title, description, comments, image, isAut, fibNum, id, handleOpenModal}: ICardNews) => {

  return (
  <div className={classes.container}>
    {isAut && <GrClose onClick={() => handleOpenModal(id)} className={classes.iconClose}/>}
    <img className={classes.img} src={image} alt={'img'}/>
    <div className={classes.groupTitle}>
      <p className={classes.title}>{title}</p>
      <p className={classes.title}>{`FN:${fibNum}`}</p>
      <IsPrimeNumber num={fibNum || 1}/>
    </div>
    <span className={classes.description}>{description}</span>
  </div>
  )
}

export default CardNews