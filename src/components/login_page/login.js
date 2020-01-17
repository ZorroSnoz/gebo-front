import React from 'react';
import s from './login_page.module.css';
import { Field, reduxForm } from 'redux-form';
import logo from '../../images/gebo_logo.jpg'

let LoginPage = (props) => {

  let onSubmit = (formData) => {
    console.log(formData)
  }

  return (
    <div className={s.loginContainer}>
      <div className={s.logoContainer}>
        <img src={logo}></img>
        <h1>Gebo</h1>
      </div>
      <div className={s.loginForm}>
        <h2>Вхід</h2>
        <ReduxLoginForm onSubmit={onSubmit} />
      </div>
    </div>
  );
}

let LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} >
      <Field placeholder={"Ім'я"} name={'login'} component={'input'}/>
      <button>ПОГНАЛИ</button>
    </form>
  )
};

let ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm);

export default LoginPage;