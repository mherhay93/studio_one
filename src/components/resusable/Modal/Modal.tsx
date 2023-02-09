import {FC, PropsWithChildren} from "react";
import {GrClose} from "react-icons/gr";
import cn from "classnames";
import classes from './styleModal.module.css'

interface IModal {
  isModal: boolean,
  handleCloseModal: () => void,

}

const Modal: FC<PropsWithChildren<IModal>> = ({children, isModal, handleCloseModal}) => {

  return (
  <div className={cn(classes.container, {[classes.display]: isModal})}>
    <div className={classes.modalBody}>
      <GrClose onClick={handleCloseModal} className={classes.iconClose}/>
      {children}
    </div>
  </div>
  )
}

export default Modal