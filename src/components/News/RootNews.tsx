import Layout from "../resusable/Layout/Layout";
import News from "./News";
import LeftMenu from "../resusable/LeftMenu/LeftMenu";
import Filter from "../resusable/Filter/Filter";

const RootNews = () => {

  return (
  <Layout leftMenu={<LeftMenu children={<Filter/>}/>} children={<News/>}/>
  )
}

export default RootNews