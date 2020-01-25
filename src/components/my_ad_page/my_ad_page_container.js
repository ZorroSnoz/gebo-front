import React from 'react';
import Header from '../header/header';
import MyAdPage from './my_ad_page';
import { connect } from 'react-redux';
import { editAd, deleteAd } from '../../redux/ad_reduser';

let MyAdPageContainer = ({ad, userId, editAd, deleteAd, ...props}) => {

return (<>
<Header />
<MyAdPage ad={ad} userId={userId} deleteAd={deleteAd} editAd={editAd}/>
</>
)};

let mapStateToProps = (state) => {
    return {
        ad: state.adPage.myAdsData,
        userId: state.loginPage.idUser
    }
};

export default connect(mapStateToProps, { editAd, deleteAd })(MyAdPageContainer);