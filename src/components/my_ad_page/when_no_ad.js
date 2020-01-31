import React from 'react';
import s from './my_ad_page.module.css';

let NoMyAd = () => {
    return (
        <div className={s.noAdsMessage}>
           <p>Немає оголошень.</p>
        </div>
    )
};

export default NoMyAd;