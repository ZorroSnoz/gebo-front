import React, { useState } from 'react';
import EditMyAd from './edit_my_ad';
import Header from '../header/header';
import { connect } from 'react-redux';
import { addEditAd } from '../../redux/ad_reduser';
import dataPicker from '../../services/data_picker';
import { Redirect } from 'react-router-dom';

let EditMyAdContainer = ({ addEditAd, editAdData, ...props }) => {
    const [submit, setSubmit] = useState(0);
    let onSubmit = (formData) => {
        let categoryText = ['продаж/бартер', 'оголошення', 'продаж', 'купівля/бартер'];
        let time = dataPicker();
        let addData = {
            ...formData,
            typeClass: formData.typeClass,
            typeText: categoryText[formData.typeClass],
            adData: time
        }
console.log(formData)
        addEditAd(addData);
        setSubmit(1);
    };

    if (submit == 0) {
        return (<>
            <Header />
            <EditMyAd  onSubmit={onSubmit} />
        </>
        )
    }
    else {
        return (
            <Redirect to='/my-ad' />
        )
    }
};

let mapStateToProps = (state) => {
    return {
        editAdData: state.adPage.editAd
    }
};

export default connect(mapStateToProps, { addEditAd })(EditMyAdContainer);