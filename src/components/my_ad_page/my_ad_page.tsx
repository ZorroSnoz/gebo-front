import React, {FC} from 'react'
import s from './my_ad_page.module.css'
import AdItemContainer from '../ad_page/ad_item/ad_item_container'
import {AdDataType} from '../../types/types'

/////////// types for props
type PropsType = {
    ads: Array<AdDataType>
    userId: string

    // :todo not sure maybe need added types for functions
    editAd: (item: AdDataType) => void
    deleteAd: (idItem: string) => void
}


///////////// my ad page component
let MyAdPage: FC<PropsType> = ({ads, userId, editAd, deleteAd}) => {

return (
<div className={s.pageContainer}>
    <AdItemContainer ads={ads} deleteAd={deleteAd} userId={userId} editAd={editAd} />
</div>
)}

export default MyAdPage