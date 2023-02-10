import {Field, Form, Formik} from "formik";
import cn from "classnames";
import {useFetchAddNews} from "../../../api/useFetchAddNews";
import classes from './styleAddNews.module.css'

interface IAddNews {
  handleCloseModal: () => void
}

const AddNews = ({handleCloseModal}: IAddNews) => {

  const {fetchAddNews} = useFetchAddNews()

  return (
  <div className={classes.container}>
    <h3 className={classes.title}>Add news</h3>
    <Formik
    initialValues={{title: '', description: '', image: ''}}
    onSubmit={(values) => {
      fetchAddNews(values)
      handleCloseModal()
      values.title = ''
      values.description = ''
      values.image = ''
    }}
    >
      {() => {
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
            <label className={classes.label} htmlFor="image">Image Url</label>
            <Field id="image" name="image" placeholder="image URL https://*****"/>
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
