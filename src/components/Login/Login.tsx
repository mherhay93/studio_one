import {Form, Formik, Field} from "formik";
import {Link} from "react-router-dom";
import {pages} from "../../constants";
import classes from './styleLogin.module.css'

const Login = () => {

  return (
  <div className={classes.container}>
    <div className={classes.containerForm}>
      <h3 className={classes.title}>Login</h3>
      <Formik
      initialValues={{name: '', password: ''}}
      onSubmit={(values) => {
        console.log(values)
      }}
      >
        <Form>
          <div className={classes.input}>
            <label className={classes.label} htmlFor="name">Name</label>
            <Field id="name" name="name" placeholder="Name"/>
          </div>
          <div className={classes.input}>
            <label className={classes.label} htmlFor="password">Password</label>
            <Field id="password" name="password" placeholder="Password"/>
          </div>
          <button className={classes.button} type="submit">Login</button>
        </Form>
      </Formik>
    </div>
    <Link to={pages[0].path} className={classes.home}>Home</Link>
  </div>
  );
}

export default Login