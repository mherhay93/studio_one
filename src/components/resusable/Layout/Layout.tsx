import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { FC, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren> = (props) => {
  return (
  <>
    <Navbar isAut={false}/>
    {props.children}
    <Footer/>
  </>
  )
}

export default Layout