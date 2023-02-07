import {Route, Routes} from "react-router";
import RootHome from "../components/Home/RootHome";
import RootNews from "../components/News/RootNews";
import NotFound from "../components/NotFound/NotFound";
import Profile from "../components/Profile/Profile";
import Login from "../components/Login/Login";


const routs = (isAut: boolean) => {

  if (isAut) {
    return (
    <Routes>
      <Route path={'/'} element={<RootHome/>}/>
      <Route path={'/news'} element={<RootNews/>}/>
      <Route path={'/profile'} element={<Profile/>}/>
      <Route path={'*'} element={<NotFound/>}/>
    </Routes>
    )
  } else {
    return (
    <Routes>
      <Route path={'/'} element={<RootHome/>}/>
      <Route path={'/login'} element={<Login/>}/>
      <Route path={'/news'} element={<RootNews/>}/>
      <Route path={'*'} element={<NotFound/>}/>
    </Routes>
    )
  }

}

export default routs