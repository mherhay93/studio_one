import {INews} from "../../../types";
import IsPrime from "../IsPrime/IsPrimeNumber";
import classes from './styleCard.module.css'

interface ICardNews extends INews {
  isAut:boolean
}


const CardNews = ({title, description, comments, image, isAut, fibNum}:ICardNews) => {
  return (
  <div className={classes.container}>
    <img className={classes.img} src={image} alt={'img'}/>
    <div className={classes.groupTitle}>
      <p className={classes.title}>{title}</p>
      <p className={classes.title}>{`FN:${fibNum}`}</p>
      <IsPrime num={fibNum || 1}/>
    </div>
    <span className={classes.description}>{description}</span>
  </div>
  )
}

export default CardNews