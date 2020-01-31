import React from 'react';
import s from './my_ad_page.module.css';
import AdItemContainer from '../ad_page/ad_item/ad_item_container';

let MyAdPage = ({ads, userId, editAd, deleteAd, ...props}) => {

return (
<div className={s.pageContainer}>
    <AdItemContainer ads={ads} deleteAd={deleteAd} userId={userId} editAd={editAd} />
</div>
)};

export default MyAdPage;