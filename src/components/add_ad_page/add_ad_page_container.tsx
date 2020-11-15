import React, {FC, useEffect} from 'react'
import { connect, ConnectedProps } from 'react-redux'
import AddAdPage from './add_ad_page'
import { AddAdThunk, stopToLoad} from '../../redux/ad_reduser'
import { Redirect } from 'react-router-dom'
import {InitialStateAndUserDataType} from '../../types/types'
import {AppStateType} from '../../redux/redux_store'

///////////// types for props
type PropsType = PropsFromRedux
// types takes from connect() where added mapStateToProps and mapDispatchToProps
type PropsFromRedux = ConnectedProps<typeof connector>
// type for mapStateToProps
type MapStatePropsType = {
    userData: InitialStateAndUserDataType
    loaded: boolean
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
        console.log(formData)
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
let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        userData: state.loginPage,
        loaded: state.adPage.adAddLoad
    }
}

// function for takes type from connect()
const connector = connect(mapStateToProps, { AddAdThunk, stopToLoad })

export default connector(AddAdPageContainer)