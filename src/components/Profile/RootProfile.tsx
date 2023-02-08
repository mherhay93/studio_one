import Layout from "../resusable/Layout/Layout";
import Profile from "./Profile";
import LeftMenu from "../resusable/LeftMenu/LeftMenu";

const RootProfile = () => {
  return (
  <Layout leftMenu={<LeftMenu/>} children={<Profile/>}/>
  )
}

export default RootProfile