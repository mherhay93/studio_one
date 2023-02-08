import {Navigate} from "react-router";
import {Link} from "react-router-dom";
import {Form, Formik, Field} from "formik";
import {loginPaths, pages} from "../../constants";
import {useFetchUsers} from "../../api/useFetchUsers";
import {StatusFetch} from "../../types";
import classes from './styleLogin.module.css'

const Login = () => {

  const {fetchUsers, status} = useFetchUsers()

  return (
  <div className={classes.container}>
    <div className={classes.containerForm}>
      <h3 className={classes.title}>Login</h3>
      <Formik
      initialValues={{name: '', password: ''}}
      onSubmit={(values) => {
        fetchUsers(values)
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
          <div className={classes.input}>
            <button className={classes.button} type="submit">Login</button>
            {status === StatusFetch.ERROR && <span className={classes.error}>The username or password you entered is incorrect</span>}
            {status === StatusFetch.SUCCESS &&  <Navigate to={loginPaths[0].path}/>}

          </div>
        </Form>
      </Formik>
    </div>
    <Link to={pages[0].path} className={classes.home}>Home</Link>
  </div>
  );
}

export default Login