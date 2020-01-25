import React from 'react';
import s from '../add_ad_page/add_ad_page.module.css';
import EditAdFormRedux from './edit_form_redux';

///////// edit ad component 
let EditMyAd = ({ onSubmit, ...props}) => {

    return (
        <div className={s.pageContainer}>
            <h1>РЕДАГУВАТИ ОГОЛОШЕННЯ</h1>
            <EditAdFormRedux onSubmit={onSubmit} />
        </div>
    )
};

export default EditMyAd;