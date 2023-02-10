import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {Link, NavLink, useLocation} from "react-router-dom";
import {CgProfile} from 'react-icons/cg'
import cn from 'classnames'
import {BiLogIn, BiExit} from 'react-icons/bi'
import {images} from "../../assets/images/images";
import {loginPaths, pages} from "../../constants";
import {setIsAut} from "../../store/newsData/news";
import classes from './styleNavbar.module.css'


interface INavbar {
  isAut: boolean
}

const Navbar = ({isAut}: INavbar) => {
  const [isActive, setIsActive] = useState(false)

  const loc = useLocation()
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
    localStorage.isAut = false
  }

  useEffect(() => {
    if(loc.pathname === loginPaths[0].path) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }, [])

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
          <CgProfile size={'2vw'} className={cn(classes.iconProfile, {[classes.iconProfileActive]: isActive})}/>
        </NavLink>
        <NavLink
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