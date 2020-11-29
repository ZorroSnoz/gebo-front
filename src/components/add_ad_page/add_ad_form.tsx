import React, {FC, useState} from 'react'
import s from './add_ad_page.module.css'
import {Field, reduxForm, InjectedFormProps} from 'redux-form'
import {AddAdFormDataType} from '../../types/types'
import InputAdTitle from '../fields/input_ad_title_field'
import {maxLength200, minLength10, required} from '../../services/validations'
import AdRadioGroup from '../fields/radio_group'

/////////////  add ad form component
//InjectedFormProps injected type for redux-form, AddAdFormDataType type for submit function arguments
let AddAdForm: FC<InjectedFormProps<AddAdFormDataType>> = ({handleSubmit, ...props}) => {

    // for activated "load" in button after click
    const [submit, setSubmit] = useState(0)

    return <form className={s.adForm} onSubmit={handleSubmit}>
        <Field
            name={'discription'}
            component={InputAdTitle}
            validate={[required, maxLength200, minLength10]}/>
        <h2>Я хочу*</h2>
        <Field component={AdRadioGroup} name={'category'} validate={[required]} options={[
            {title: 'продати/обміняти', value: '0', id: 'radio1'},
            {title: 'оголошення', value: '1', id: 'radio2'},
            {title: 'продати', value: '2', id: 'radio3'},
            {title: 'купити/обміняти', value: '3', id: 'radio4'}
        ]}/>
        <div className={s.inputFile}>
            <Field id='inputFile' name={'foto'} type='file' component={'input'}/>
            <label htmlFor='inputFile'>ДОДАТИ ФОТО</label>
        </div>
        {submit === 0
            // :TODO need added really disabled button when form submitted, now <button>Завантаження...</button> send data
            ?
            <button type='submit'
                    onClick={() => {
                        setSubmit(1)
                    }}
            >ДОДАТИ ОГОЛОШЕННЯ</button>
            : props.invalid ? setSubmit(0) : <button>Завантаження...</button>}
    </form>
}

// AddAdFormDataType for arguments in submit function
export default reduxForm<AddAdFormDataType>({form: 'ad_add'})(AddAdForm)