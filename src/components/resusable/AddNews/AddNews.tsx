import {Field, Form, Formik} from "formik";
import cn from "classnames";
import {useFetchAddNews} from "../../../api/useFetchAddNews";
import classes from './styleAddNews.module.css'

interface IAddNews {
  handleCloseModal: () => void
}

const AddNews = ({handleCloseModal}: IAddNews) => {

  const image = new FormData()
  const {fetchAddNews} = useFetchAddNews()

  return (
  <div className={classes.container}>
    <h3 className={classes.title}>Add news</h3>
    <Formik
    initialValues={{title: '', description: '', image: ''}}
    onSubmit={(values) => {
      fetchAddNews(values)
      handleCloseModal()
      console.log({...values, image: image.get('image')}, 'im')
    }}
    >
      {({
          errors,
          touched,
          values,
          dirty,
          isValid,
          handleChange,
          handleBlur
        }) => {

        return (
        <Form>
          <div className={classes.input}>
            <label className={classes.label} htmlFor="title">Title</label>
            <Field id="title" name="title" placeholder="Title"/>
          </div>
          <div className={cn(classes.input, classes.description)}>
            <label className={classes.label} htmlFor="description">Description</label>
            <Field component="textarea" id="description" name="description" placeholder="Description"/>
          </div>
          <div className={cn(classes.input, classes.description)}>
            <label className={cn(classes.label, classes.uploadImage)} htmlFor="file">Choose File</label>
            <input
            id='file'
            type='file'
            name='photo'
            accept='image/*'
            onChange={(e) => {
              image.append('image', e.target.files?.[0] || '')
            }
            }
            />
          </div>
          <div className={classes.input}>
            <button className={classes.button} type="submit">Add</button>
          </div>
        </Form>
        )
      }}
    </Formik>
  </div>
  )
}

export default AddNews
