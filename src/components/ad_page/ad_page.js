import React from 'react';
import Header from '../header/header';
import AdItemContainer from './ad_item/ad_item_container';
import AddAdButton from './add_ad_button/add_ad_button';
import { connect } from 'react-redux';
import { addAd } from '../../redux/ad_reduser';

let Ad = ({addAd, ad, login, ...props}) => {
    return (<>
    <Header/>
<AdItemContainer ad={ad} userId={login.idUser}/> 
<AddAdButton addAd={addAd}/>
</>
    );
};

let mapStateToProps = (state) => {
    return {
        ad: state.adPage.adsData,
        login: state.loginPage
    }
};

export default connect(mapStateToProps, { addAd })(Ad);
