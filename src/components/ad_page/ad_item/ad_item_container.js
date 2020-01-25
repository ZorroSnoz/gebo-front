import React from 'react';
import AdItem from './ad_item';

let AdItemCon = ({ad, userId, editAd, deleteAd, ...props}) => {

    let adItems = ad.map(item => <AdItem deleteAd={deleteAd} item={item} userId={userId} editAd={editAd} />);
    return (
        <>
{adItems}
        </>
    );
};


export default AdItemCon;
