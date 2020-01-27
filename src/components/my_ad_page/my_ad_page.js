import React from 'react';
import s from './my_ad_page.module.css';
import AdItemContainer from '../ad_page/ad_item/ad_item_container';
import AddAdButton from '../ad_page/add_ad_button/add_ad_button';

let MyAdPage = ({ads, userId, editAd, deleteAd, ...props}) => {

return (
<div className={s.pageContainer}>
    <AdItemContainer ads={ads} deleteAd={deleteAd} userId={userId} editAd={editAd} />
    <AddAdButton/>
</div>
)};

export default MyAdPage;