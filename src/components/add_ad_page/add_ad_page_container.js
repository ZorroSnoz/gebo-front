import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import AddAdPage from './add_ad_page';
import dataPicker from '../../services/data_picker';
import { AddAdThunk, stopToLoad} from '../../redux/ad_reduser';
import { generatorId } from '../../services/generator_id';
import { Redirect } from 'react-router-dom';

/////////////////// add ad page container component
let AddAdPageContainer = ({ AddAdThunk, userData, load, stopToLoad, ...props }) => {

    useEffect(() => {
        return () => {
            stopToLoad()
        }
    });

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
        AddAdThunk(addData)
    }
    if (load === false) {
        return (
            <AddAdPage onSubmit={onSubmit} />
        )
    }
    else {
        return (
            <Redirect to='/gebo/my-ad' />
        )
    }

};

let mapStateToProps = (state) => {
    return {
        userData: state.loginPage,
        load: state.adPage.adAddLoad
    }
};

export default connect(mapStateToProps, { AddAdThunk, stopToLoad })(AddAdPageContainer);