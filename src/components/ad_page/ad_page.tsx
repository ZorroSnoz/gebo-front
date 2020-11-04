import React, {FC, useEffect} from 'react'
import Header from '../header/header'
import AdItemContainer from './ad_item/ad_item_container'
import NoAds from "../my_ad_page/no_ads"
import AddAdButton from './add_ad_button/add_ad_button'
import Preloader from '../preloader/preloader'
import { connect } from 'react-redux'
import { getAdsThunk, deleteAllAd } from '../../redux/ad_reduser'
import {AppStateType} from "../../redux/redux_store"
import {AdsInfo, InitialStateAndUserDataType} from "../../types/types"


///////////// types for props
type PropsType = {
    adsInfo: AdsInfo
    login: InitialStateAndUserDataType

    // :todo not sure maybe need added types for functions
    getAdsThunk: (idUser: string | null) => void
    deleteAllAd: () => void
}

///////////// ad page component
let Ad: FC<PropsType> = ({adsInfo, login, getAdsThunk, deleteAllAd}) => {

    // before load ads check auth-user and after close page remove ads from state
    useEffect(() => {
        getAdsThunk(login.idUser)
        return () => {
            deleteAllAd()
          }
      },[])

    // if haveAds true - render preloader, if haveAds false - render noAds message
    return <>
        <Header />
        {(adsInfo.adsData.length === 0 && adsInfo.haveAds)
        ? <Preloader />
        : !adsInfo.haveAds
            ? <NoAds/>
            : <AdItemContainer ads={adsInfo.adsData} userId={login.idUser} />}
              <AddAdButton />
    </>
}

///////////// create props for Ad component
let mapStateToProps = (state: AppStateType) => {
    return {
        adsInfo: state.adPage.adsInfo,
        login: state.loginPage
    }
}

// @ts-ignore :todo maybe this nedd ignore but need specify
export default connect(mapStateToProps, { getAdsThunk, deleteAllAd })(Ad)
