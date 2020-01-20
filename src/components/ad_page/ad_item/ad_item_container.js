import React from 'react';
import AdItem from './ad_item';

let AdItemCon = ({ad, userId, editAd, ...props}) => {
    let adItems = ad.map(item => <AdItem item={item} userId={userId} editAd={editAd} />);

    return (
        <>
{adItems}
        </>
    );
};


export default AdItemCon;