import React from 'react';
import AdItem from './ad_item';


let AdItemCon = ({ads, userId, editAd, deleteAd, ...props}) => {
    let adItems = ads.map(item => <AdItem deleteAd={deleteAd} item={item} userId={userId} editAd={editAd} />);
    return (
        <>
{adItems}
        </>
    );
};


export default AdItemCon;
