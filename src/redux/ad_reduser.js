import apiExpress from '../api_express/api';

const ADD_AD = 'ADD_AD';
const ADD_EDIT_AD = 'ADD_EDIT_AD';
const ADD_POST_EDIT_AD = 'ADD_POST_EDIT_AD';
const DELETE_AD = 'DELETE_AD';
const DELETE_ALL_AD = 'DELETE_ALL_AD';

const GET_ADS = 'GET_ADS';

let initialState = {
    editAd: {},
    myAdsData: [],
    adsData: [],
};

const adReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_AD: {
            return {
                ...state,
                myAdsData: action.adData
            };
        }
        case ADD_EDIT_AD: {
            state.editAd = action.adData;
            return state;
        }
        case ADD_POST_EDIT_AD: {
            let newItem = state.myAdsData.filter(item => item.idAd != action.adData.idAd);
            newItem.push(action.adData);
            state.myAdsData = newItem;
            return state;
        }
        case DELETE_AD: {
            let newItem = state.myAdsData.filter(item => item.idAd != action.adData.idAd);
            state.myAdsData = newItem;
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
        case DELETE_ALL_AD: {
            return {
                ...state,
                adsData: action.adData
            };
        }
        default: {
            return state;
        }
    }

}

export let addAd = () => ({ type: ADD_AD, adData: [] });
export let editAd = (adData) => ({ type: ADD_EDIT_AD, adData });
export let addEditAd = (adData) => ({ type: ADD_POST_EDIT_AD, adData });
export let deleteAd = (adData) => ({ type: DELETE_AD, adData });
export let deleteAllAd = () => ({ type: DELETE_ALL_AD, adData: [] })

let getAds = (adsData) => ({ type: GET_ADS, adsData });

export let getAdsThunk = () => {
    return (dispatch) => {
        apiExpress.getAds().then(response => {
            dispatch(getAds(response.data))
        })
    }
}

export let AddAdThunk = (addData) => {
    return (dispatch) => {
        apiExpress.addNewAd(addData).then(response => {

            if (response.data == 'OK') {
                dispatch(addAd());
                console.log('New ad is added.')
            }
            else {
                console.log('AddAdThunk error.')
            }
        })
    }
}

export default adReducer;