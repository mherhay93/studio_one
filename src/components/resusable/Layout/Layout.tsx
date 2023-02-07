import { FC, PropsWithChildren } from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import classes from './styleLayout.module.css'

const Layout: FC<PropsWithChildren> = (props) => {
  return (
  <div className={classes.container}>
    <Navbar isAut={false}/>
    {props.children}
    <Footer/>
  </div>
  )
}

export default Layout