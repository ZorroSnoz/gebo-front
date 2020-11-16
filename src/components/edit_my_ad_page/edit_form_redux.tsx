import React, {FC} from 'react'
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import peacePicture from '../../images/peace.jpg'
import s from '../add_ad_page/add_ad_page.module.css'
import {AdDataType, EditAdFormDataType} from '../../types/types'

///////////// Types for props
type PropsType = {
    initialValues: AdDataType | {}
}

///////////// Edit ad form with redux-form component
let EditAdForm: FC<InjectedFormProps<EditAdFormDataType, PropsType> & PropsType>  = ({handleSubmit}) => {

    return <form className={s.adForm} onSubmit={handleSubmit} >
            <Field
                placeholder={'Опис оголошення*'}
                type={'text'}
                name={'description'}
                component={'input'} />
            <h2>Категорія*</h2>
            <div className={s.radioBlock}>
                <div>
                    <Field
                        id='radio1'
                        name={'typeClass'}
                        type='radio'
                        value="0"
                        component={'input'} />
                    <label htmlFor='radio1'>продати/обміняти</label>
                    <Field
                        id='radio2'
                        name={'typeClass'}
                        type='radio'
                        value="1"
                        component={'input'} />
                    <label htmlFor='radio2'>оголошення</label>
                </div>
                <div>
                    <Field
                        id='radio3'
                        name={'typeClass'}
                        type='radio'
                        value="2"
                        component={'input'} />
                    <label htmlFor='radio3'>продати</label>
                    <Field
                        id='radio4'
                        name={'typeClass'}
                        type='radio'
                        value="3"
                        component={'input'} />
                    <label htmlFor='radio4'>купити/обміняти</label>
                </div>
            </div>
            <div className={s.inputFile}>
                <img className={s.adFoto} src={peacePicture} />
                <Field id='inputFile' name={'img'} type='file' component={'input'} />
                <label htmlFor='inputFile'>ДОДАТИ ФОТО</label>
            </div>
            <button type='submit'>ЗМІНИТИ</button>
        </form>
}

let EditAdFormRedux = reduxForm<EditAdFormDataType, PropsType>({ form: 'edit_ad' })(EditAdForm)

export default EditAdFormRedux
