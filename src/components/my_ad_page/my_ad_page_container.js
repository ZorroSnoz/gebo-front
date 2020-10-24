import React, { useEffect } from 'react';
import Header from '../header/header';
import MyAdPage from './my_ad_page';
import { connect } from 'react-redux';
import { editAd, deleteMyAdThunk, getMyAdsThunk, deleteMyAd } from '../../redux/ad_reduser';
import Preloader from '../preloader/preloader.jsx';
import AddAdButton from '../ad_page/add_ad_button/add_ad_button';
import NoMyAd from './when_no_ad';

let MyAdPageContainer = ({ ads, userId, editAd, deleteMyAdThunk, getMyAdsThunk, deleteMyAd, ...props }) => {

    useEffect(() => {
        getMyAdsThunk(userId);
        return () => {
            deleteMyAd()
        }
    }, []);
    return (<>
        <Header />
        <AddAdButton />
        {(ads.myAdsData.length === 0 && ads.userHaveAds === true)
            ? <Preloader />
            : (ads.userHaveAds === false)
                ? <NoMyAd/>
                : <MyAdPage ads={ads} userId={userId} deleteAd={deleteMyAdThunk} editAd={editAd} />}

    </>
    )
};

let mapStateToProps = (state) => {
    return {
        ads: state.adPage.myAdsInfo,
        userId: state.loginPage.idUser
    }
};

export default connect(mapStateToProps, { editAd, deleteMyAdThunk, getMyAdsThunk, deleteMyAd })(MyAdPageContainer);