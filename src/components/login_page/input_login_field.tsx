import React, {FC} from 'react'
import s from './login_page.module.css'

///////////// types for props
// :todo need fix any type
type PropsType = any

///////////// input component for Field
let InputLogin: FC<PropsType> = ({ input, meta, ...props }) => {
    return (
        <input {...input} {...props} placeholder={"Ім'я"} className={s.inputForm} />
    )
}


export default InputLogin