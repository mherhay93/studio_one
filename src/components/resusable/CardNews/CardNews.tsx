import classes from './styleCard.module.css'
import {INews} from "../../../types";

interface ICardNews extends INews {
  isAut:boolean
}


const CardNews = ({title, description, comments, image, isAut}:ICardNews) => {
  return (
  <div className={classes.container}>
    <img className={classes.img} src={image} alt={'img'}/>
    <p className={classes.title}>{title}</p>
    <span className={classes.description}>{description}</span>
  </div>
  )
}

export default CardNews