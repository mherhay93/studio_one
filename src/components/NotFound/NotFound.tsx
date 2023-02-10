import classes from './styleNotFound.module.css'
import {Link} from "react-router-dom";
import {pages} from "../../constants";
const NotFound = () => {

  return (
  <div className={classes.container}>
    <h1 className={classes.title}>Page Not Found !!!</h1>
    <Link className={classes.link} to = {pages[0].path}>
      Home
    </Link>
  </div>
  )
}

export default NotFound