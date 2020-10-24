// ad_reduser types
export type AdDataType = {
    adData: string
    autor: string
    autorId: string
    description: string
    idAd: string
    img: null | string
    typeClass: string
    typeText: string
    _id: string
}

export type MyAdsInfo = {
    userHaveAds: boolean
    // myAdsData: Array<AdDataType> | object
    myAdsData: any
}