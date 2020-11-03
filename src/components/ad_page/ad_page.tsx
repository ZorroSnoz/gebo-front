import React, {FC, useEffect} from 'react'
import Header from '../header/header'
import AdItemContainer from './ad_item/ad_item_container'
import AddAdButton from './add_ad_button/add_ad_button'
import { connect } from 'react-redux'
import { getAdsThunk, deleteAllAd } from '../../redux/ad_reduser'
import Preloader from '../preloader/preloader.jsx'
import {AppStateType} from "../../redux/redux_store"
import {AdDataType, InitialStateAndUserDataType} from "../../types/types"

///////////// types for props
type PropsType = {
    ads: Array<AdDataType>
    login: InitialStateAndUserDataType

    // :todo not sure maybe need added types for functions
    getAdsThunk: (idUser: string | null) => void
    deleteAllAd: () => void
}

///////////// ad page component
let Ad: FC<PropsType> = ({ads, login, getAdsThunk, deleteAllAd}) => {

    // before load ads check auth-user and after close page remove ads from state
    useEffect(() => {
        getAdsThunk(login.idUser)
        return () => {
            deleteAllAd()
          }
      },[])

    return <>
        <Header />
        {ads.length === 0 
        ? <Preloader />
        : <AdItemContainer ads={ads} userId={login.idUser} />}     
        <AddAdButton />
    </>
}

///////////// create props for Ad component
let mapStateToProps = (state: AppStateType) => {
    return {
        ads: state.adPage.adsData,
        login: state.loginPage
    }
}

// @ts-ignore :todo maybe this nedd ignore but need specify
export default connect(mapStateToProps, { getAdsThunk, deleteAllAd })(Ad)
