import React, {FC} from 'react'
import s from '../add_ad_page/add_ad_page.module.css'
import {AdDataType, EditAdFormDataType} from '../../types/types'
import EditAdFormRedux from './edit_form_redux'

///////////// types for props
type PropsType = {
    onSubmit: (formData: EditAdFormDataType) => void
    initialValues: AdDataType | {}
    isEditAdLoad : boolean
}

///////// edit ad component
let EditMyAd: FC<PropsType> = ({onSubmit, initialValues, isEditAdLoad}) => {

    return <div className={s.pageContainer}>
            <h1>РЕДАГУВАТИ ОГОЛОШЕННЯ</h1>
            <EditAdFormRedux onSubmit={onSubmit} initialValues={initialValues} isEditAdLoad={isEditAdLoad} />
           </div>

}

export default EditMyAd