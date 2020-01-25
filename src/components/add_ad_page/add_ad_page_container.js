import React, { useState } from 'react';
import { connect } from 'react-redux';
import AddAdPage from './add_ad_page';
import dataPicker from '../../services/data_picker';
import { addAd } from '../../redux/ad_reduser';
import { generatorId } from '../../services/generator_id';
import { Redirect } from 'react-router-dom';

/////////////////// add ad page container component
let AddAdPageContainer = ({ addAd, userData, ...props }) => {
    const [submit, setSubmit] = useState(0);
    let onSubmit = (formData) => {
        let categoryText = ['продаж/бартер', 'оголошення', 'продаж', 'купівля/бартер'];
        let time = dataPicker();
        let addData = {
            idAd: generatorId(),
            img: formData.adFoto = null,
            description: formData.discription,
            autor: userData.name,
            autorId: userData.idUser,
            typeClass: formData.category,
            typeText: categoryText[formData.category],
            adData: time
        }
        addAd(addData)
        setSubmit(1);
    }
    if (submit == 0) {
        return (
            <AddAdPage onSubmit={onSubmit} />
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
        userData: state.loginPage,
    }
};

export default connect(mapStateToProps, { addAd })(AddAdPageContainer);