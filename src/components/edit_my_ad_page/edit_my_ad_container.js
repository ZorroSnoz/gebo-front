import React from 'react';
import EditMyAd from './edit_my_ad';
import Header from '../header/header';
import { connect } from 'react-redux';

let EditMyAdContainer = ({editAdData, ...props}) => {
return(<>
<Header/>
<EditMyAd editAdData={editAdData} />
</>
)};

let mapStateToProps = (state) => {
    return {
        editAdData: state.adPage.editAd
    }
};

export default connect(mapStateToProps, null)(EditMyAdContainer);