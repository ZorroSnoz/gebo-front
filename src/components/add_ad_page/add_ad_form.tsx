import React, {FC, useState} from 'react'
import s from './add_ad_page.module.css'
import { Field, reduxForm, InjectedFormProps } from 'redux-form'
import {AddAdFormDataType} from '../../types/types'

/////////////  add ad form component
//InjectedFormProps injected type for redux-form, AddAdFormDataType type for submit function arguments
let AddAdForm: FC<InjectedFormProps<AddAdFormDataType>> = ({handleSubmit}) => {

    // for activated "load" in button after click
    const [submit, setSubmit] = useState(0)

    return <form className={s.adForm} onSubmit={handleSubmit} >
            <Field
                placeholder={'Опис оголошення*'}
                type={'text'}
                name={'discription'}
                component={'input'} />
            <h2>Я хочу*</h2>
            <div className={s.radioBlock}>
                <div>
                    <Field
                        id='radio1'
                        name={'category'}
                        type='radio'
                        value="0"
                        component={'input'} />
                    <label htmlFor='radio1'>продати/обміняти</label>
                    <Field
                        id='radio2'
                        name={'category'}
                        type='radio'
                        value="1"
                        component={'input'} />
                    <label htmlFor='radio2'>оголошення</label>
                </div>
                <div>
                    <Field
                        id='radio3'
                        name={'category'}
                        type='radio'
                        value="2"
                        component={'input'} />
                    <label htmlFor='radio3'>продати</label>
                    <Field
                        id='radio4'
                        name={'category'}
                        type='radio'
                        value="3"
                        component={'input'} />
                    <label htmlFor='radio4'>купити/обміняти</label>
                </div>
            </div>
            <div className={s.inputFile}>
                <Field id='inputFile' name={'foto'} type='file' component={'input'} />
                <label htmlFor='inputFile'>ДОДАТИ ФОТО</label>
            </div>
            {submit === 0
                ? <button type='submit' onClick={()=>{setSubmit(1)}}>ДОДАТИ ОГОЛОШЕННЯ</button>
                : <button>Завантаження...</button>}


        </form>
}

// AddAdFormDataType for arguments in submit function
export default reduxForm<AddAdFormDataType>({ form: 'ad_add' })(AddAdForm)