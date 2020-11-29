import React, {FC} from 'react'
import s from './fields.module.css'

///////////// types for props
// :todo need fix any type
type PropsType = any

///////////// radio buttons component for category ad
let AdRadioGroup: FC<PropsType> = ({ input, meta, options }) => {
    const hasError = meta.touched && meta.error

    return (
        <div className={s.radioGroup}>
            {options.map((o: { value: string, title: string }) => <label className={(hasError ? `${s.errorInput}` : '') + (o.value === input.value ? ` ${s.labelRadio}` : '')} key={o.value}><input type='radio' {...input} checked={o.value === input.value} value={o.value}  /> {o.title}</label>)}
            {hasError && <span className={s.errorSpan}>{meta.error}</span>}
        </div>
    );
}

export default AdRadioGroup