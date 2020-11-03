import React, { useState } from 'react';
import s from './add_ad_page.module.css';
import { Field, reduxForm } from 'redux-form';
import Header from '../header/header';

// :todo need added TS for redux-form component
//////////////////// add ad page component
let AddAdPage = ({ onSubmit, ...props }) => {
    return (<>
        <Header />
        <div className={s.addAdPage} >
            <h1>ДОДАТИ ОГОЛОШЕННЯ</h1>
            <ReduxAddAdform onSubmit={onSubmit} />
        </div>
    </>)
};
/////////////////////  add ad form conponent
let AddAdForm = (props) => {
    const [submit, setSubmit] = useState(0);
    return (
        <form className={s.adForm} onSubmit={props.handleSubmit} >
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
                    <label for='radio1'>продати/обміняти</label>
                    <Field
                        id='radio2'
                        name={'category'}
                        type='radio'
                        value="1"
                        component={'input'} />
                    <label for='radio2'>оголошення</label>
                </div>
                <div>
                    <Field
                        id='radio3'
                        name={'category'}
                        type='radio'
                        value="2"
                        component={'input'} />
                    <label for='radio3'>продати</label>
                    <Field
                        id='radio4'
                        name={'category'}
                        type='radio'
                        value="3"
                        component={'input'} />
                    <label for='radio4'>купити/обміняти</label>
                </div>
            </div>
            <div className={s.inputFile}>
                <Field id='inputFile' name={'foto'} type='file' component={'input'} />
                <label for='inputFile'>ДОДАТИ ФОТО</label>
            </div>
            {submit === 0
                ? <button type='submit' onClick={()=>{setSubmit(1)}}>ДОДАТИ ОГОЛОШЕННЯ</button>
                : <button>Завантаження...</button>}


        </form>
    )
};
let ReduxAddAdform = reduxForm({ form: 'ad_add' })(AddAdForm);

///////////////

export default AddAdPage;