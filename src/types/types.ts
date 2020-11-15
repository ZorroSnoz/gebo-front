// ad_reduser types
export type AdDataType = {
    adData: string
    autor: string
    autorId: string
    description: string
    idAd: string
    img: null | string
    typeClass: string | number
    typeText: string
    _id?: string
}

export type AdsInfo = {
    haveAds: boolean
    adsData: Array<AdDataType>
}

export type EditAdFormDataType = {
    adData: string
    autor: string
    autorId: string
    description: string
    idAd: string
    img: null | string
    typeClass: string | number
    typeText: string
    _id: string
}

export type AddAdFormDataType = {
    adFoto: null | string
    category: string
    discription: string
}

// login_reduser types
export type InitialStateAndUserDataType = {
    registered: boolean
    name: null | string
    idUser: null | string
}

export type LoginFormDataType = {
    login: string
}