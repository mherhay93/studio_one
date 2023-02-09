import classes from './styleConfirmModal.module.css'
import cn from "classnames";

interface IConfirmModal {
  handleDelete: (id: string) => void,
  closeModal: () => void,
  id: string
}

const ConfirmModal = ({closeModal, handleDelete, id}: IConfirmModal) => {
  return (
  <div>
    <p className={classes.title}>Do you want delete this news</p>
    <div>
      <button onClick={() => {
        handleDelete(id)
        closeModal()
      }} className={classes.btn}>Ok</button>
      <button onClick={closeModal} className={cn(classes.btn, classes.cancelButton)}>Cancel</button>
    </div>
  </div>
  )
}

export default ConfirmModal