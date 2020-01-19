import React from 'react';
import { connect } from 'react-redux';
import AddAdPage from './add_ad_page';
import dataPicker from '../../services/data_picker';
import { addAd } from '../../redux/ad_reduser';
import { generatorId } from '../../services/generator_id';
import { duration } from '@material-ui/core';

/////////////////// add ad page container component
let AddAdPageContainer = ({ addAd, userData, ...props }) => {
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
    }

    return (
        <AddAdPage onSubmit={onSubmit} />
    )
};

let mapStateToProps = (state) => {
    return {
        userData: state.loginPage,
    }
};

export default connect(mapStateToProps, { addAd })(AddAdPageContainer);