import React, {FC} from 'react'
import s from './add_ad_page.module.css'
import Header from '../header/header'
import AddAdForm from './add_ad_form'
import {AddAdFormDataType} from '../../types/types'

///////////// types for props
type PropsType = {
    onSubmit: (formData: AddAdFormDataType) => void
}

///////////// add ad page component
let AddAdPage: FC<PropsType> = ({onSubmit}) => {

    return <>
        <Header />
        <div className={s.addAdPage} >
            <h1>ДОДАТИ ОГОЛОШЕННЯ</h1>
            <AddAdForm onSubmit={onSubmit} />
        </div>
    </>
}

export default AddAdPage