import Layout from "../resusable/Layout/Layout";
import News from "./News";
import LeftMenu from "../resusable/LeftMenu/LeftMenu";

const RootNews = () => {

  return (
  <Layout leftMenu={<LeftMenu/>} children={<News/>}/>
  )
}

export default RootNews