import React, {FC} from 'react'
import s from './fields.module.css'

///////////// types for props
// :todo need fix any type
type PropsType = any

///////////// input component for login Field
let InputLogin: FC<PropsType> = ({input, meta, ...props}) => {

    let hasError = meta.touched && meta.error;

    return <div className={s.inputField}>
        <input placeholder={"Ім'я"} {...input} {...props}
               className={(hasError ? `${s.errorInput}` : '') + ` ${s.inputForm} ${s.loginField }`}/>
        {hasError && <span className={s.errorSpan}>{meta.error}</span>}
    </div>
}

export default InputLogin