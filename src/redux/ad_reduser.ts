import apiExpress from '../api_express/api';
import {AdDataType, MyAdsInfo} from "../types/types";

///////////// Const for actioncreators
const ADD_AD = 'ADD_AD';
const ADD_EDIT_AD = 'ADD_EDIT_AD';
const ADD_POST_EDIT_AD = 'ADD_POST_EDIT_AD';
const DELETE_AD = 'DELETE_AD';
const DELETE_ALL_AD = 'DELETE_ALL_AD';
const DELETE_MY_AD = 'DELETE_MY_AD';
const STOP_TO_LOAD = 'STOP_TO_LOAD';
const GET_ADS = 'GET_ADS';
const GET_MY_ADS = 'GET_MY_ADS';

///////////// Initial state
// :todo need remove any in InitialStateType
type InitialStateType = {
    editAd: any
    myAdsInfo: MyAdsInfo
    adsData: Array<AdDataType>
    adAddLoad: boolean
}
let initialState: InitialStateType = {
    editAd: {},
    myAdsInfo: {
        userHaveAds: true,
        myAdsData: []
    },
    adsData: [],
    adAddLoad: false
};

///////////// Reduser
const adReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ADD_AD: {
            let myAdsInfo: MyAdsInfo = {
                userHaveAds: true,
                myAdsData: action.adData
            }
            return {
                ...state,
                myAdsInfo: myAdsInfo,
                adAddLoad: true
            };
        }
        case ADD_EDIT_AD: {
            state.editAd = action.adData;
            return state;
        }
        case ADD_POST_EDIT_AD: {
            let newItem = state.myAdsInfo.myAdsData.filter((item: any) => item.idAd != action.adData.idAd);
            newItem.push(action.adData);
            state.myAdsInfo.myAdsData = newItem;
            return state;
        }
        case DELETE_AD: {
            let newItem = state.myAdsInfo.myAdsData.filter((item: any) => item.idAd != action.adId);

            let myAdsInfo: MyAdsInfo = {
                userHaveAds: true,
                myAdsData: newItem
            }

            if (newItem.length === 0) {
                myAdsInfo.userHaveAds = false
            }

            return {
                ...state,
                myAdsInfo: myAdsInfo
            };
        }
        case GET_ADS: {
            return {
                ...state,
                adsData: action.adsData
            };
        }
        case GET_MY_ADS: {
            let myAdsInfo: MyAdsInfo = {
                myAdsData: action.myAdsInfo.myAdsData,
                userHaveAds: action.myAdsInfo.userHaveAds
            }
            return {
                ...state,
                myAdsInfo: myAdsInfo
            };
        }
        case DELETE_ALL_AD: {
            return {
                ...state,
                adsData: action.adData
            };
        }
        case DELETE_MY_AD: {
            let myAdsInfo: MyAdsInfo = {
                ...state.myAdsInfo,
                myAdsData: action.adData
            }
            return {
                ...state,
                myAdsInfo: myAdsInfo
            };
        }
        case STOP_TO_LOAD: {
            return {
                ...state,
                adAddLoad: false
            };
        }
        default: {
            return state;
        }
    }

}

///////////// Actioncreators
type AddAd_ActionType = {
    type: typeof ADD_AD
    adData: object
}
export let addAd = ():AddAd_ActionType => ({ type: ADD_AD, adData: [] });

type EditAd_ActionType = {
    type: typeof ADD_EDIT_AD
    adData: AdDataType
}
export let editAd = (adData: AdDataType):EditAd_ActionType => ({ type: ADD_EDIT_AD, adData })

type AdData_ActionType = {
    type: typeof ADD_POST_EDIT_AD
    adData: AdDataType
}
// :todo need added thunk for sync to backend
export let addEditAd = (adData: AdDataType):AdData_ActionType => ({ type: ADD_POST_EDIT_AD, adData })

type DeleteAd_ActionType = {
    type: typeof DELETE_AD
    adId: string
}
export let deleteAd = (adId: string):DeleteAd_ActionType => ({ type: DELETE_AD, adId })

type DeleteAllAd_ActionType = {
    type: typeof DELETE_ALL_AD
    adData: object
}
export let deleteAllAd = ():DeleteAllAd_ActionType => ({ type: DELETE_ALL_AD, adData: [] })

type DeleteMyAd_ActionType = {
    type: typeof DELETE_MY_AD
    adData: object
}
export let deleteMyAd = ():DeleteMyAd_ActionType => ({ type: DELETE_MY_AD, adData: [] })

type StopToLoad_ActionType = {
    type: typeof STOP_TO_LOAD
}
export let stopToLoad = ():StopToLoad_ActionType => ({ type: STOP_TO_LOAD })

type GetAds_ActionType = {
    type: typeof GET_ADS
    adsData: Array<AdDataType>
}
let getAds = (adsData: Array<AdDataType>):GetAds_ActionType => ({ type: GET_ADS, adsData })

type GetMyAds_ActionType = {
    type: typeof GET_MY_ADS
    myAdsInfo: MyAdsInfo
}
let getMyAds = (myAdsInfo: MyAdsInfo):GetMyAds_ActionType => ({ type: GET_MY_ADS, myAdsInfo })

///////////// Thanks
export let getAdsThunk = (userId: string) => async (dispatch: any) => {
    let response = await apiExpress.getAds(userId);
    dispatch(getAds(response.data));
}

export let getMyAdsThunk = (userId: string) => async (dispatch: any) => {
    let response = await apiExpress.getMyAds(userId);

    if (response.data.length === 0) {
        dispatch(getMyAds({userHaveAds: false, myAdsData: []}))
    }
    else {
        dispatch(getMyAds({userHaveAds: true, myAdsData: response.data}))
    }
}

export let deleteMyAdThunk = (adId: string) => async (dispatch: any) => {
    let response: any = await apiExpress.deleteAd(adId);

    if (response.data == 'OK') {
        dispatch(deleteAd(adId));
        console.log('Ad to delete.')
    }
    else {
        console.log('DeleteMyAdThunk error.')
    }
}

export let AddAdThunk = (addData : any) => async (dispatch: any) => {
    let response: any = await apiExpress.addNewAd(addData);

    if (response.data == 'OK') {
        dispatch(addAd());
        console.log('New ad is added.')
    }
    else {
        console.log('AddAdThunk error.')
    }
}
/////////////

export default adReducer;