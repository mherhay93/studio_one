import {useSelector} from "react-redux";
import {getUser} from "../../store/newsData/selectors";
import classes from './styleProfile.module.css'

const Profile = () => {
  const userStore = useSelector(getUser)
  const userInLocal = localStorage.user && JSON.parse(localStorage.user)

  const user = userInLocal || userStore

  return (
  <div className={classes.container}>
    <span className={classes.sub}>name:</span>
    <h1 className={classes.name}>{user.name}</h1>
  </div>
  )
}

export default Profile
