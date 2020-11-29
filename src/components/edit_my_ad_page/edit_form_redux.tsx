import React, {FC, useState} from 'react'
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import peacePicture from '../../images/peace.jpg'
import s from '../add_ad_page/add_ad_page.module.css'
import {AdDataType, EditAdFormDataType} from '../../types/types'
import AdRadioGroup from '../fields/radio_group'
import {maxLength200, minLength10, required} from '../../services/validations'
import InputAdTitle from "../fields/input_ad_title_field";

///////////// Types for props
type PropsType = {
    initialValues: AdDataType | {}
    isEditAdLoad: boolean
}

///////////// Edit ad form with redux-form component
let EditAdForm: FC<InjectedFormProps<EditAdFormDataType, PropsType> & PropsType>  = ({handleSubmit, ...props}) => {
    // effect for disable button after click
    const [submit, setSubmit] = useState(0)
    console.log(props)

    return <form className={s.adForm} onSubmit={handleSubmit} >
            <Field
                name={'description'}
                component={InputAdTitle}
            validate ={[required, maxLength200, minLength10]}/>
            <h2>Категорія*</h2>
        <Field component={AdRadioGroup} name={'typeClass'} validate={[required]} options={[
            {title: 'продати/обміняти', value: '0', id: 'radio1'},
            {title: 'оголошення', value: '1', id: 'radio2'},
            {title: 'продати', value: '2', id: 'radio3'},
            {title: 'купити/обміняти', value: '3', id: 'radio4'}
        ]}/>
            <div className={s.inputFile}>
                <img className={s.adFoto} src={peacePicture} />
                <Field id='inputFile' name={'img'} type='file' component={'input'} />
                <label htmlFor='inputFile'>ДОДАТИ ФОТО</label>
            </div>
        {submit === 0
            // :TODO need added really disabled button when form submitted, now <button>Завантаження...</button> send data
            ?
            <button type='submit'
                    onClick={() => {
                        setSubmit(1)
                    }}
            >ЗМІНИТИ</button>
            : props.invalid ? setSubmit(0) : <button>Завантаження...</button>}
        </form>
}

let EditAdFormRedux = reduxForm<EditAdFormDataType, PropsType>({ form: 'edit_ad' })(EditAdForm)

export default EditAdFormRedux
