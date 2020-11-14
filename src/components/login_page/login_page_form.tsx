import React, {FC} from 'react'
import { Field, reduxForm } from 'redux-form'
import InputLogin from './input_login_field'

///////////// types for props
// :todo need fix any type
type PropsType = any

///////////// login form component
let LoginForm: FC<PropsType> = ({...props}) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <Field name={'login'} component={InputLogin} />
            <button type='submit'>ПОГНАЛИ</button>
        </form>
    )
};
let ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm)

export default ReduxLoginForm
