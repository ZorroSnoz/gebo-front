import React, {FC} from 'react'
import s from './fields.module.css'

///////////// types for props
// :todo need fix any type
type PropsType = any

///////////// input component for login Field
let InputAdTitle: FC<PropsType> = ({input, meta, ...props}) => {

    let hasError = meta.touched && meta.error;

    return <div className={s.inputField}>
        <input placeholder={'Опис оголошення*'} {...input} {...props}
               className={(hasError ? `${s.errorInput}` : '') + ` ${s.inputForm}`}/>
        {hasError && <span className={s.errorSpan}>{meta.error}</span>}
    </div>
}

export default InputAdTitle