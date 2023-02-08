import {Link, NavLink} from "react-router-dom";
import {CgProfile} from 'react-icons/cg'
import {BiLogIn, BiExit} from 'react-icons/bi'
import cn from 'classnames'

import {images} from "../../assets/images/images";
import {loginPaths, pages} from "../../constants";
import classes from './styleNavbar.module.css'
import {useDispatch} from "react-redux";
import {setIsAut} from "../../store/newsData/news";

interface INavbar {
  isAut: boolean
}

const Navbar = ({isAut}: INavbar) => {

  const dispatch = useDispatch()

  const activeStyle = {
    color: 'green',
    textDecoration: 'underline',
  }

  const activeIcons = {
    color: 'green'
  }

  const handleExit = () => {
    dispatch(setIsAut(false))
    window.localStorage.clear()
  }

  return (
  <nav className={classes.container}>
    <Link to={pages[0].path}>
      <img className={classes.logo} src={images.newsLogo} alt={'logo'}/>
    </Link>
    <div className={cn(classes.flex, classes.linkContainer)}>
      {pages.map(item => (
      <NavLink
      style={({isActive}) =>
      isActive ? activeStyle : undefined
      }
      className={classes.styleLink}
      key={item.path}
      to={item.path}>
        {item.name}
      </NavLink>
      ))}
    </div>
    <div>
      {isAut ? (
      <div className={cn(classes.flex, classes.linkIcons)}>
        <NavLink
        style={({isActive}) =>
        isActive ? activeIcons : undefined
        }
        to={loginPaths[0].path}>
          <CgProfile size={'2vw'} className={classes.iconProfile}/>
        </NavLink>
        <NavLink
        style={({isActive}) =>
        isActive ? activeIcons : undefined
        }
        to={pages[0].path}
        onClick={handleExit}
        >
          <BiExit size={'2vw'} className={classes.iconProfile}/>
        </NavLink>
      </div>
      ) : (
      <NavLink
      style={({isActive}) =>
      isActive ? activeIcons : undefined
      }
      to={loginPaths[1].path}>
        <BiLogIn size={'2vw'} className={classes.iconProfile}/>
      </NavLink>
      )}
    </div>
  </nav>
  )
}

export default Navbar