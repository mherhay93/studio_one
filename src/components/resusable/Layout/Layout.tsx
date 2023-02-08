import { FC, PropsWithChildren } from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import classes from './styleLayout.module.css'

const Layout: FC<PropsWithChildren> = (props) => {
  const isAut = localStorage.isAut && JSON.parse(localStorage.isAut)
  return (
  <div className={classes.container}>
    <Navbar isAut={isAut}/>
    <div className={classes.main}>
      {props.children}
    </div>
    <Footer/>
  </div>
  )
}

export default Layout