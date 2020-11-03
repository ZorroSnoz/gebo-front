// ad_reduser types
export type AdDataType = {
    adData: string
    autor: string
    autorId: string
    description: string
    idAd: string
    img: null | string
    typeClass: number
    typeText: string
    _id?: string
}

export type MyAdsInfo = {
    userHaveAds: boolean
    myAdsData: Array<AdDataType>
}


// login_reduser types
export type InitialStateAndUserDataType = {
    registered: boolean
    name: null | string
    idUser: null | string
}