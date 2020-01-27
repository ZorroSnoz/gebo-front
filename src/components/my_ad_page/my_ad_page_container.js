import React from 'react';
import Header from '../header/header';
import MyAdPage from './my_ad_page';
import { connect } from 'react-redux';
import { editAd, deleteAd } from '../../redux/ad_reduser';

let MyAdPageContainer = ({ads, userId, editAd, deleteAd, ...props}) => {

return (<>
<Header />
<MyAdPage ads={ads} userId={userId} deleteAd={deleteAd} editAd={editAd}/>
</>
)};

let mapStateToProps = (state) => {
    return {
        ads: state.adPage.myAdsData,
        userId: state.loginPage.idUser
    }
};

export default connect(mapStateToProps, { editAd, deleteAd })(MyAdPageContainer);