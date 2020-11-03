import React, { useState }  from 'react';
import s from './login_page.module.css';
import { Field, reduxForm } from 'redux-form';
import logo from '../../images/gebo_logo.jpg';
import { addNewUserThunk } from '../../redux/login_reduser';
import { connect } from 'react-redux';
import { generatorId } from '../../services/generator_id';
import Preloader from '../preloader/preloader.jsx';

// :todo fix redux-form for TS
////////////////////////////////// login page container component
let LoginPageCon = ({addNewUserThunk, ...state}) => {

  const [buttonLogin, setButton] = useState(0);

  let onSubmit = (formData) => {
    let userData = { registered: true, name: formData.login, idUser: generatorId() };
    addNewUserThunk(userData);
    setButton(1);
  }

  return (
    <>
    {buttonLogin === 0
    ? <LoginPage onSubmit={onSubmit} />
    : <Preloader/>}
    </>
  );
}
let LoginPageContainer = connect(null, { addNewUserThunk })(LoginPageCon);
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