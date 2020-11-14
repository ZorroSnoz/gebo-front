import React, {FC, useState} from 'react'
import EditMyAd from './edit_my_ad'
import Header from '../header/header'
import {connect, ConnectedProps} from 'react-redux'
import { addEditAd } from '../../redux/ad_reduser'
import { Redirect } from 'react-router-dom'
import {AppStateType} from '../../redux/redux_store'
import {AdDataType, EditAdFormDataType} from '../../types/types'

///////////// types for props
type PropsType = PropsFromRedux
// types takes from connect() where added mapStateToProps and mapDispatchToProps
type PropsFromRedux = ConnectedProps<typeof connector>

///////////// add ad page container component
let EditMyAdContainer: FC<PropsType> = ({addEditAd}) => {
    // effect for toogle my-ads page and edit-ad page
    const [submit, setSubmit] = useState(0)
    // function for take form data and call addEditAd()
    let onSubmit = (formData: EditAdFormDataType) => {
        addEditAd(formData)
        setSubmit(1)
    }

    if (submit === 0) {
        return (<>
            <Header />
            <EditMyAd  onSubmit={onSubmit} />
        </>
        )
    }
    else {
        return (
            <Redirect to='/my-ad' />
        )
    }
}


// function for takes type from connect()
const connector = connect(null, { addEditAd })

export default connector(EditMyAdContainer)