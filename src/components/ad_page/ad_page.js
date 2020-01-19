import React from 'react';
import Header from '../header/header';
import AdItemContainer from './ad_item/ad_item_container';
import AddAdButton from './add_ad_button/add_ad_button';
import { connect } from 'react-redux';
import {addAd} from '../../redux/ad_reduser';

let Ad = ({addAd, ... props}) => {
    return (<>
    <Header/>
<AdItemContainer/> 
<AddAdButton addAd={addAd}/>
</>
    );
};

export default connect(null, { addAd })(Ad);
