import classes from './styleLeftMenu.module.css'
import {FC, PropsWithChildren} from "react";
const LeftMenu:FC<PropsWithChildren> = (props) => {
  return (
  <div className={classes.container}>
    {props.children}
  </div>
  )
}

export default LeftMenu