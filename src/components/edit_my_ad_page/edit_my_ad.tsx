import React, {FC} from 'react'
import EditAdForm from './edit_form_redux'
import s from '../add_ad_page/add_ad_page.module.css'
import {AdDataType, EditAdFormDataType} from '../../types/types'
import EditAdFormRedux from "./edit_form_redux";

///////////// types for props
type PropsType = {
    onSubmit: (formData: EditAdFormDataType) => void
    initialValues: AdDataType | {}
}

///////// edit ad component
let EditMyAd: FC<PropsType> = ({onSubmit, initialValues}) => {

    return <div className={s.pageContainer}>
            <h1>РЕДАГУВАТИ ОГОЛОШЕННЯ</h1>
            <EditAdFormRedux onSubmit={onSubmit} initialValues={initialValues} />
           </div>

}

export default EditMyAd