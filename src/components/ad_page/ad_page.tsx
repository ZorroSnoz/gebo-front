import React, {FC, useEffect} from 'react'
import Header from '../header/header'
import AdItemContainer from './ad_item/ad_item_container'
import NoAds from "../my_ad_page/no_ads"
import AddAdButton from './add_ad_button/add_ad_button'
import Preloader from '../preloader/preloader'
import {connect, ConnectedProps} from 'react-redux'
import { getAdsThunk, deleteAllAd } from '../../redux/ad_reduser'
import {AppStateType} from '../../redux/redux_store'
import {AdsInfo, InitialStateAndUserDataType} from '../../types/types'

///////////// types for props
type PropsType = PropsFromRedux
// types takes from connect() where added mapStateToProps and mapDispatchToProps
type PropsFromRedux = ConnectedProps<typeof connector>
// type for mapStateToProps
type MapStatePropsType = {
    adsInfo: AdsInfo
    login: InitialStateAndUserDataType
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
let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        adsInfo: state.adPage.adsInfo,
        login: state.loginPage
    }
}

// function for takes type from connect()
const connector = connect(mapStateToProps, { getAdsThunk, deleteAllAd })
export default connector(Ad)
