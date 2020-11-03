import React, {FC, useEffect} from 'react'
import { connect } from 'react-redux'
import AddAdPage from './add_ad_page'
import { AddAdThunk, stopToLoad} from '../../redux/ad_reduser'
import { Redirect } from 'react-router-dom'
import {InitialStateAndUserDataType} from "../../types/types"
import {AppStateType} from "../../redux/redux_store"

///////////// types for props
type PropsType = {
    userData: InitialStateAndUserDataType
    loaded: boolean

    // :todo not sure maybe need added types for functions
    AddAdThunk: (formData: any, userData: InitialStateAndUserDataType) => void
    stopToLoad: () => void
}

///////////// add ad page container component
let AddAdPageContainer: FC<PropsType> = ({ AddAdThunk, userData, loaded, stopToLoad}) => {

    useEffect(() => {
        // when page close this effect make "loaded" false for render adding ad page in future
        return () => {
            stopToLoad()
        }
    })

 // :todo need fix any types in function
    let onSubmit = (formData: any) => {
        AddAdThunk(formData, userData)
    }
    // "loaded" if true - ad added in server and redirect to my-ad page, if false render page for adding ad
    if (loaded) {
        return  <Redirect to='/my-ad' />
    }
    else {
        return <AddAdPage onSubmit={onSubmit} />
    }
}

///////////// create props for AddAdPageContainer component
let mapStateToProps = (state: AppStateType) => {
    return {
        userData: state.loginPage,
        loaded: state.adPage.adAddLoad
    }
}

export default connect(mapStateToProps, { AddAdThunk, stopToLoad })(AddAdPageContainer)