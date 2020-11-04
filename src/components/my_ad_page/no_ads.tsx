import React from 'react'
import s from './my_ad_page.module.css'

///////////// component shows when no ads
let NoAds = () => {
    return (
        <div className={s.noAdsMessage}>
           <p>Немає оголошень.</p>
        </div>
    )
}

export default NoAds