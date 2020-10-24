import React, { useEffect } from 'react';
import Header from '../header/header';
import AdItemContainer from './ad_item/ad_item_container';
import AddAdButton from './add_ad_button/add_ad_button';
import { connect } from 'react-redux';
import { addAd, getAdsThunk, deleteAllAd } from '../../redux/ad_reduser';
import Preloader from '../preloader/preloader.jsx';

let Ad = ({ addAd, ads, login, getAdsThunk, deleteAllAd, ...props }) => {

    useEffect(() => {
        getAdsThunk(login.idUser);
        return () => {
            deleteAllAd()
          }
      },[]);

    return (<>
        <Header />
        {ads.length === 0 
        ? <Preloader />
        : <AdItemContainer ads={ads} userId={login.idUser} />}     
        <AddAdButton addAd={addAd} />
    </>
    );
};

let mapStateToProps = (state) => {
    return {
        ads: state.adPage.adsData,
        login: state.loginPage
    }
};

export default connect(mapStateToProps, { addAd, getAdsThunk, deleteAllAd })(Ad);
