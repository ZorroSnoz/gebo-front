import React, {FC, useState} from 'react'
import { addNewUserThunk } from '../../redux/login_reduser'
import {connect, ConnectedProps} from 'react-redux'
import Preloader from '../preloader/preloader'
import LoginPage from './login_page'

///////////// types for props
type PropsType = PropsFromRedux
// types takes from connect() where added mapStateToProps and mapDispatchToProps
type PropsFromRedux = ConnectedProps<typeof connector>

///////////// login page container component
let LoginPageCon: FC<PropsType> = ({addNewUserThunk}) => {

  const [buttonLogin, setButton] = useState(0)

  let onSubmit = (formData: any) => {

    addNewUserThunk(formData)
    setButton(1)
  }

  return (
    <>
    {buttonLogin === 0
    ? <LoginPage onSubmit={onSubmit} />
    : <Preloader/>}
    </>
  )
}

const connector = connect(null, { addNewUserThunk })
export default connector(LoginPageCon)