import React from 'react';
import s from '../add_ad_page/add_ad_page.module.css';
import { Field, reduxForm } from 'redux-form';
import peacePicture from '../../images/peace.jpg';

///////// edit ad component
let EditMyAd = ({ editAdData, ...props }) => {

    console.log(editAdData)
    return (
        <div className={s.pageContainer}>
            <h1>РЕДАГУВАТИ ОГОЛОШЕННЯ</h1>
            <ReduxEditAdform editAdData={editAdData} />
        </div>
    )
};
/////////  edit ad form component
let EditAdForm = ({ editAdData, ...props }) => {

    let { idAd, img, description, autor, autorId, typeClass, typeText, adData } = editAdData;

    let InputDescription = ({ input, meta, ...props }) => {
        return (<input {...input} {...props} />);
    };

    return (
        <form className={s.adForm} onSubmit={props.handleSubmit} >
            <Field
                placeholder={'Опис оголошення*'}
                type={'text'}
                name={'discription'}
                component={InputDescription} />
            <h2>Категорія*</h2>
            <div className={s.radioBlock}>
                <div>
                    <Field
                        checked={typeClass == '0' ? 'checked' : ''}
                        id='radio1'
                        name={'category'}
                        type='radio'
                        value="0"
                        component={'input'} />
                    <label for='radio1'>продати/обміняти</label>
                    <Field
                        checked={typeClass == '1' ? 'checked' : ''}
                        id='radio2'
                        name={'category'}
                        type='radio'
                        value="1"
                        component={'input'} />
                    <label for='radio2'>оголошення</label>
                </div>
                <div>
                    <Field
                        checked={typeClass == '2' ? 'checked' : ''}
                        id='radio3'
                        name={'category'}
                        type='radio'
                        value="2"
                        component={'input'} />
                    <label for='radio3'>продати</label>
                    <Field
                        checked={typeClass == '3' ? 'checked' : ''}
                        id='radio4'
                        name={'category'}
                        type='radio'
                        value="3"
                        component={'input'} />
                    <label for='radio4'>купити/обміняти</label>
                </div>
            </div>
            <div className={s.inputFile}>
                <img className={s.adFoto} src={peacePicture} />
                <Field id='inputFile' name={'foto'} type='file' component={'input'} />
                <label for='inputFile'>ДОДАТИ ФОТО</label>
            </div>
            <button type='submit'>ЗМІНИТИ</button>
        </form>
    )
};
let ReduxEditAdform = reduxForm({
    form: 'edit_ad',
    initialValues: {
        members: [
            {
                discription: "myFirstName"
            }
        ]
    }
})(EditAdForm);

export default EditMyAd;