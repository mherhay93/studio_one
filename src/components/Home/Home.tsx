import {Link} from "react-router-dom";
import {pages, textHome} from "../../constants";
import classes from './styleHome.module.css'

const Home = () => {

  return (
  <div className={classes.container}>
    <p className={classes.textName}>{textHome}</p>
    <Link to={pages[1].path} className={classes.textGo}>
      GO !!!
    </Link>
  </div>
  )
}

export default Home