import React, {FC} from 'react'
import s from './login_page.module.css'
import logo from '../../images/gebo_logo.jpg'
import {LoginFormDataType} from '../../types/types'
import LoginForm from './login_page_form'

///////////// types for props
type PropsType = {
    onSubmit: (formData: LoginFormDataType)=> void
}

///////////// login page component
let LoginPage: FC<PropsType> = ({onSubmit}) => {
  return (
    <div className={s.loginContainer}>
      <div className={s.logoContainer}>
        <img src={logo}/>
        <h1>Gebo</h1>
      </div>
      <div className={s.loginForm}>
        <h2>ВХІД</h2>
        <LoginForm onSubmit={onSubmit} />
      </div>
    </div>
  )
}

export default LoginPage