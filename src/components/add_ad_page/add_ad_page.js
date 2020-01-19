import React from 'react';
import s from './add_ad_page.module.css';
import { Field, reduxForm } from 'redux-form';
import Header from '../header/header';

//////////////////// add ad page component
let AddAdPage = ({ onSubmit, ...props }) => {
    return (
        <div className={s.addAdPage} >
            <Header />
            <h1>ДОДАТИ ОГОЛОШЕННЯ</h1>
            <ReduxAddAdform onSubmit={onSubmit} />
        </div>
    )
};
/////////////////////  add ad form conponent
let AddAdForm = (props) => {

let radio1 = React.createRef();
let radio2 = React.createRef();
let radio3 = React.createRef();
let radio4 = React.createRef();

let radioButton = (radio) => {
    radio.click();
    console.log(radio.current);
};

    return (
        <form className={s.adForm} onSubmit={props.handleSubmit} >
            <Field name={'discription'} component={InputDescription} />
            <div className={s.radioBlock}>
                <div>
                    <div onClick={()=>{radioButton(radio1)}}>
                        <div>
                            <Field checked="" ref={radio1} name={'category'} value='продати/обміняти' type='radio' component={'input'} />
                        </div>
                        <div><p>продати/обміняти</p></div>
                    </div>
                    <div>
                        <div>
                            <Field ref={radio2} name={'category'} value='оголошення' type='radio' component={'input'} />
                        </div>
                        <div><p>оголошення</p></div>
                    </div>

                </div>
                <div>
                    <div>
                        <div>
                            <Field ref={radio3} name={'category'} value='продати' type='radio' component={'input'} />
                        </div>
                        <div><p>продати</p></div>
                    </div>
                    <div>
                        <div>
                            <Field ref={radio4} name={'category'} value='купити/обміняти' type='radio' component={'input'} />
                        </div>
                        <div><p>купити/обміняти</p></div>
                    </div>
                </div>
            </div>
            <Field name={'foto'} type='file' component={'input'} />
            <button type='submit'>ДОДАТИ</button>
        </form>
    )
};
let ReduxAddAdform = reduxForm({ form: 'ad_add' })(AddAdForm);
///////////////// input component for Field

let InputDescription = ({ input, meta, ...props }) => {
    return (
        <input {...input} {...props} placeholder={"Опис оголошення"} />
    )
};
///////////////

export default AddAdPage;