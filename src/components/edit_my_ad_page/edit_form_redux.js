import React from 'react';
import { Field, reduxForm } from 'redux-form';
import peacePicture from '../../images/peace.jpg';
import { connect } from 'react-redux';
import s from '../add_ad_page/add_ad_page.module.css';

let EditAdFormRedux = (props) => {
    const { handleSubmit } = props;

    return (
        <form className={s.adForm} onSubmit={handleSubmit} >
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
                    <label for='radio1'>продати/обміняти</label>
                    <Field
                        id='radio2'
                        name={'typeClass'}
                        type='radio'
                        value="1"
                        component={'input'} />
                    <label for='radio2'>оголошення</label>
                </div>
                <div>
                    <Field
                        id='radio3'
                        name={'typeClass'}
                        type='radio'
                        value="2"
                        component={'input'} />
                    <label for='radio3'>продати</label>
                    <Field
                        id='radio4'
                        name={'typeClass'}
                        type='radio'
                        value="3"
                        component={'input'} />
                    <label for='radio4'>купити/обміняти</label>
                </div>
            </div>
            <div className={s.inputFile}>
                <img className={s.adFoto} src={peacePicture} />
                <Field id='inputFile' name={'img'} type='file' component={'input'} />
                <label for='inputFile'>ДОДАТИ ФОТО</label>
            </div>
            <button type='submit'>ЗМІНИТИ</button>
        </form>
    )
};

EditAdFormRedux = reduxForm({ form: 'edit_ad' })(EditAdFormRedux);
EditAdFormRedux = connect(state => ({ initialValues: state.adPage.editAd }))(EditAdFormRedux);

export default EditAdFormRedux;