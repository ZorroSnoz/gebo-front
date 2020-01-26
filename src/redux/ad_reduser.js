import apiExpress from '../api_express/api';

const ADD_AD = 'ADD_AD';
const ADD_EDIT_AD = 'ADD_EDIT_AD';
const ADD_POST_EDIT_AD = 'ADD_POST_EDIT_AD';
const DELETE_AD = 'DELETE_AD';
const GET_ADS = 'GET_ADS';
const LOAD_ADS = 'LOAD_ADS';

let initialState = {
    editAd: {},
    myAdsData: [],
    adsData: null,
    loadAds: false
};

const adReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_AD: {
            state.myAdsData.push(action.adData);
            return state;
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
                case LOAD_ADS: {
            return {
                ...state,
                loadAds: action.load
            };
        }
        default: {
            return state;
        }
    }

}

export let addAd = (adData) => ({ type: ADD_AD, adData });
export let editAd = (adData) => ({ type: ADD_EDIT_AD, adData });
export let addEditAd = (adData) => ({ type: ADD_POST_EDIT_AD, adData });
export let deleteAd = (adData) => ({ type: DELETE_AD, adData });
export let changeLoad = (load) => ({type: LOAD_ADS, load});

let getAds = (adsData) => ({type: GET_ADS, adsData});

export let getAdsThunk = () => {
    return (dispatch) => {      
        apiExpress.getAds().then(response => {
            dispatch(getAds(response.data))
        })
    }
}


export default adReducer;