import React, {FC, useEffect} from 'react'
import Header from '../header/header'
import MyAdPage from './my_ad_page'
import { connect } from 'react-redux'
import { editAd, deleteMyAdThunk, getMyAdsThunk, deleteMyAd } from '../../redux/ad_reduser'
import Preloader from '../preloader/preloader'
import AddAdButton from '../ad_page/add_ad_button/add_ad_button'
import NoAds from './no_ads'
import {AdsInfo} from '../../types/types'
import {AppStateType} from '../../redux/redux_store'

/////////// types for props
type PropsType = {
    myAdsInfo: AdsInfo
    userId: string
    editAd: any

    deleteMyAdThunk: (idItem: string) => void
    getMyAdsThunk: (userId: string) => void
    deleteMyAd: () => void
}

///////////// my ad page container component
let MyAdPageContainer: FC<PropsType> = ({ myAdsInfo, userId, editAd, deleteMyAdThunk, getMyAdsThunk, deleteMyAd}) => {

    // before render taked user id and get ads from server | after close page removed ads from state
    useEffect(() => {
        getMyAdsThunk(userId);
        return () => {
            deleteMyAd()
        }
    }, [])

    // if haveAds true - render preloader, if haveAds false - render noAds message
    return <>
        <Header />
        <AddAdButton />
        {(myAdsInfo.adsData.length === 0 && myAdsInfo.haveAds)
            ? <Preloader />
            : !myAdsInfo.haveAds
                ? <NoAds/>
                : <MyAdPage ads={myAdsInfo.adsData} userId={userId} deleteAd={deleteMyAdThunk} editAd={editAd} />}
    </>
}

///////////// create props for MyAdPageContainer component
let mapStateToProps = (state: AppStateType) => {
    return {
        myAdsInfo: state.adPage.myAdsInfo,
        userId: state.loginPage.idUser
    }
}

// @ts-ignore
export default connect(mapStateToProps, { editAd, deleteMyAdThunk, getMyAdsThunk, deleteMyAd })(MyAdPageContainer)