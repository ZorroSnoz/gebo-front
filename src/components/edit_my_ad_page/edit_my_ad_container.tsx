import React, {FC, useEffect} from 'react'
import EditMyAd from './edit_my_ad'
import Header from '../header/header'
import {connect, ConnectedProps} from 'react-redux'
import {AddEditAdThunk, changeLoadEditAdFinish} from '../../redux/ad_reduser'
import { Redirect } from 'react-router-dom'
import {AdDataType, EditAdFormDataType} from '../../types/types'
import {AppStateType} from '../../redux/redux_store'

///////////// types for props
type PropsType = PropsFromRedux
// types takes from connect() where added mapStateToProps and mapDispatchToProps
type PropsFromRedux = ConnectedProps<typeof connector>
// type for mapStateToProps
type MapStatePropsType = {
    initialValues: AdDataType | {}
    isEditAdLoad: boolean
    isEditAdLoadFinish: boolean
}

///////////// add ad page container component
let EditMyAdContainer: FC<PropsType> = ({AddEditAdThunk, initialValues, isEditAdLoad, isEditAdLoadFinish, changeLoadEditAdFinish}) => {
   // this Effect for clear LoadEditAd toggle after close page
    useEffect(() => {
        return () => {
            changeLoadEditAdFinish(false)
        }
    }, [])
    // function for take form data and call addEditAd()
    let onSubmit = (formData: EditAdFormDataType) => {
        AddEditAdThunk(formData)
    }

    if (!isEditAdLoadFinish) {
        return <>
            <Header />
            <EditMyAd  onSubmit={onSubmit} initialValues={initialValues} isEditAdLoad={isEditAdLoad} />
        </>
    }
    else {
        return <Redirect to='/my-ad' />
    }
}

///////////// create props for EditMyAdContainer component
let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        initialValues: state.adPage.editAd,
        isEditAdLoad: state.adPage.isEditAdLoad,
        isEditAdLoadFinish: state.adPage.isEditAdLoadFinish
    }
}

// function for takes type from connect()
const connector = connect(mapStateToProps, { AddEditAdThunk, changeLoadEditAdFinish })

export default connector(EditMyAdContainer)