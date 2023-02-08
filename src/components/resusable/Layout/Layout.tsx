import {FC, PropsWithChildren, ReactNode} from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import classes from './styleLayout.module.css'

interface ILayout {
  leftMenu?: ReactNode | ReactNode[]
}

const Layout: FC<PropsWithChildren<ILayout>> = (props) => {
  const isAut = localStorage.isAut && JSON.parse(localStorage.isAut)
  return (
  <div className={classes.container}>
    <Navbar isAut={isAut}/>
    <div className={classes.main}>
      {props.leftMenu}
      {props.children}
    </div>
    <Footer/>
  </div>
  )
}

export default Layout