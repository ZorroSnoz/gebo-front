import React, {FC} from 'react'
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import InputLogin from './input_login_field'
import {LoginFormDataType} from '../../types/types'

///////////// login form component
//InjectedFormProps injected type for redux-form, LoginFormDataType type for submit function arguments
let LoginForm: FC<InjectedFormProps<LoginFormDataType>> = ({...props}) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <Field name={'login'} component={InputLogin} />
            <button type='submit'>ПОГНАЛИ</button>
        </form>
    )
}

// LoginFormDataType for arguments in submit function
export default reduxForm<LoginFormDataType>({ form: 'login' })(LoginForm)
