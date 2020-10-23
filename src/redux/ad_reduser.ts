import apiExpress from '../api_express/api';

const ADD_AD = 'ADD_AD';
const ADD_EDIT_AD = 'ADD_EDIT_AD';
const ADD_POST_EDIT_AD = 'ADD_POST_EDIT_AD';
const DELETE_AD = 'DELETE_AD';
const DELETE_ALL_AD = 'DELETE_ALL_AD';
const DELETE_MY_AD = 'DELETE_MY_AD';
const STOP_TO_LOAD = 'STOP_TO_LOAD';

const GET_ADS = 'GET_ADS';
const GET_MY_ADS = 'GET_MY_ADS';

export type InitialStateType = {
    editAd: any
    myAdsData: any
    adsData: any
    adAddLoad: boolean
}

let initialState: InitialStateType = {
    editAd: {},
    myAdsData: [],
    adsData: [],
    adAddLoad: false
};

const adReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ADD_AD: {
            return {
                ...state,
                myAdsData: action.adData,
                adAddLoad: true
            };
        }
        case ADD_EDIT_AD: {
            state.editAd = action.adData;
            return state;
        }
        case ADD_POST_EDIT_AD: {
            let newItem = state.myAdsData.filter((item: any) => item.idAd != action.adData.idAd);
            newItem.push(action.adData);
            state.myAdsData = newItem;
            return state;
        }
        case DELETE_AD: {
            let newItem = state.myAdsData.filter((item: any) => item.idAd != action.adId);

            if (newItem.length === 0) {
                newItem = false
            }
            return {
                ...state,
                myAdsData: newItem
            };
        }
        case GET_ADS: {
            return {
                ...state,
                adsData: action.adsData
            };
        }
        case GET_MY_ADS: {
            return {
                ...state,
                myAdsData: action.adsData
            };
        }
        case DELETE_ALL_AD: {
            return {
                ...state,
                adsData: action.adData
            };
        }
        case DELETE_MY_AD: {
            return {
                ...state,
                myAdsData: action.adData
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

export let addAd = () => ({ type: ADD_AD, adData: [] });
export let editAd = (adData: any) => ({ type: ADD_EDIT_AD, adData });

//need added thunk for sync to backend
export let addEditAd = (adData: any) => ({ type: ADD_POST_EDIT_AD, adData });
//
export let deleteAd = (adId: any) => ({ type: DELETE_AD, adId });
export let deleteAllAd = () => ({ type: DELETE_ALL_AD, adData: [] })
export let deleteMyAd = () => ({ type: DELETE_MY_AD, adData: [] })
export let stopToLoad = () => ({ type: STOP_TO_LOAD })

let getAds = (adsData: any) => ({ type: GET_ADS, adsData });
let getMyAds = (adsData: any) => ({ type: GET_MY_ADS, adsData });

export let getAdsThunk = (userId: string) => async (dispatch: any) => {
    let response = await apiExpress.getAds(userId);
    dispatch(getAds(response.data));
}

export let getMyAdsThunk = (userId: string) => async (dispatch: any) => {
    let response = await apiExpress.getMyAds(userId);

    if (response.data.length === 0) {
        dispatch(getMyAds(false))
    }
    else {
        dispatch(getMyAds(response.data))
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

export default adReducer;