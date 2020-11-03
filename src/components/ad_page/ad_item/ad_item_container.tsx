import React, {FC} from 'react'
import AdItem from './ad_item'
import {AdDataType} from "../../../types/types"

// type AdsInfoType = {
//     userHaveAds: boolean
//
// }
type PropsType = {
    ads: Array<AdDataType>
    userId: string | null

    // :todo not sure maybe need added types for functions
    editAd?: (item: AdDataType) => void
    deleteAd?: (idItem: string) => void
}

let AdItemCon: FC<PropsType> = ({ads, userId, editAd, deleteAd}) => {

    // using maping method for create array with ads
    let adItems = ads.map(item => <AdItem deleteAd={deleteAd} item={item} userId={userId} editAd={editAd} />)

    return <>
        {adItems}
           </>

}


export default AdItemCon
