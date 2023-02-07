import classes from './styleLayout.module.css'
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import {ReactNode} from "react";

interface ILayout {
  children: ReactNode | ReactNode[]
}


const Layout = ({children}: ILayout) => {

  return (
  <>
    <Navbar/>
    {children}
    <Footer/>
  </>
  )
}

export default Layout