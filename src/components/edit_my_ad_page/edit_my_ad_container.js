import React, { useState } from 'react'
import EditMyAd from './edit_my_ad'
import Header from '../header/header'
import { connect } from 'react-redux'
import { addEditAd } from '../../redux/ad_reduser'
import dataPicker from '../../services/data_picker'
import { Redirect } from 'react-router-dom'

///////////// types for props

let EditMyAdContainer = ({addEditAd}) => {
    const [submit, setSubmit] = useState(0)
    let onSubmit = (formData) => {
        let categoryText = ['продаж/бартер', 'оголошення', 'продаж', 'купівля/бартер']
        let time = dataPicker()
        let addData = {
            ...formData,
            typeClass: formData.typeClass,
            typeText: categoryText[formData.typeClass],
            adData: time
        }
        addEditAd(addData)
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

///////////// create props for EditMyAdContainer component
let mapStateToProps = (state) => {
    return {
        editAdData: state.adPage.editAd
    }
}

// function for takes type from connect()
const connector = connect(mapStateToProps, { addEditAd })

export default connector(EditMyAdContainer)