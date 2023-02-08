import {useDispatch} from "react-redux";
import {Field, Form, Formik} from "formik";
import {search} from "../../../store/newsData/news";
import classes from "./styleFitr.module.css"
const Filter = () => {
  const dispatch = useDispatch()

  const handleReset = () => {
    dispatch(search({}))
  }

  return (
  <div>
    <Formik
    initialValues={{
      searchText:'',
      picked: '',
    }}
    onSubmit={async (values) => {
      await new Promise((r) => setTimeout(r, 500));
      dispatch(search(values))
    }}
    >
      {({ values }) => (
      <Form className={classes.container}>
        <div id="my-radio-group" className={classes.title}>Filter</div>
        <label className={classes.label} htmlFor="searchText">Search</label>
        <Field className = {classes.input} id="searchText" name="searchText" placeholder="Search..."/>
        <div role="group" aria-labelledby="my-radio-group">
          <label>
            <Field className = {classes.radio} type="radio" name="picked" value="prime" />
            prime
          </label>
          <label>
            <Field type="radio" name="picked" value="comp" />
            comp
          </label>
        </div>
        <button type="submit">OK</button>
        <button onClick={handleReset} type="reset">Reset</button>
      </Form>
      )}
    </Formik>
  </div>
  )
}

export default Filter