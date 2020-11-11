import React, {FC} from 'react'
import s from '../add_ad_page/add_ad_page.module.css'
import EditAdFormRedux from './edit_form_redux'

///////////// types for props
type PropsType = {
    onSubmit: (formData: object) => void
}

///////// edit ad component
let EditMyAd: FC<PropsType> = ({onSubmit}) => {

    return <div className={s.pageContainer}>
            <h1>РЕДАГУВАТИ ОГОЛОШЕННЯ</h1>
            <EditAdFormRedux onSubmit={onSubmit} />
           </div>

}

export default EditMyAd