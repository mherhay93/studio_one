import classes from './styleFooter.module.css'
import {images} from "../../assets/images/images";
import {pages} from "../../constants";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
  <div className={classes.container}>
    <img className={classes.logo} src={images.newsLogo} alt={'Logo'}/>
    {pages.map(item => (
    <Link key={item.path} className = {classes.link} to={item.path}>
      {item.name}
    </Link>
    ))}
  </div>
  )
}

export default Footer