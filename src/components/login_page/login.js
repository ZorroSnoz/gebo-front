import React from 'react';
import s from './login_page.module.css';
import { Field, reduxForm } from 'redux-form';
import logo from '../../images/gebo_logo.jpg';
import { setUser } from '../../redux/login_reduser';
import { connect } from 'react-redux';
import { setCookie } from '../../cookies_helper/cookies_functions';
import { generatorId } from '../../cookies_helper/generator_id';

////////////////////////////////// login page container component
let LoginPageCon = (props) => {

  let onSubmit = (formData) => {
    let newIdUser = generatorId();
    setCookie('user', formData.login);
    setCookie('idUser', newIdUser);
    setCookie('registered', true);
    let userData = { registered: true, name: formData.login, idUser: newIdUser };
    props.setUser(userData)
  }

  return (
    <>
      <LoginPage onSubmit={onSubmit} />
    </>
  );
}
let LoginPageContainer = connect(null, { setUser })(LoginPageCon);
////////////////////////////////// login page component
let LoginPage = ({ onSubmit, ...props }) => {
  return (
    <div className={s.loginContainer}>
      <div className={s.logoContainer}>
        <img src={logo}></img>
        <h1>Gebo</h1>
      </div>
      <div className={s.loginForm}>
        <h2>ВХІД</h2>
        <ReduxLoginForm onSubmit={onSubmit} />
      </div>
    </div>
  );
}
/////////////////////// login form conponent
let LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} >
      <Field name={'login'} component={InputLogin} />
      <button type='submit'>ПОГНАЛИ</button>
    </form>
  )
};
let ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm);
///////////////////// input component for Field
let InputLogin = ({ input, meta, ...props }) => {
  return (
    <input {...input} {...props} placeholder={"Ім'я"} className={s.inputForm} />
  )
}
export default LoginPageContainer;