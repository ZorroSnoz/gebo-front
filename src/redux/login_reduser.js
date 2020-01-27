import apiExpress from '../api_express/api';
import { addCookies } from '../services/cookies_functions';

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

let initialState = {
registered: false,
name: null,
idUser: null
};

const loginReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...action.userData
            };
        }
        default: {
            return state;
        }
    }

}

export let setUser = (userData) => ({ type: SET_AUTH_USER_DATA,  userData});

export let addNewUserThunk = (userData) => {
    return (dispatch) => {      
        apiExpress.addNewUser(userData).then(response => {
            
            if (response.data == 'OK') {
                addCookies(userData);
                dispatch(setUser(userData)); 
                console.log('New user is added.');
            }
            else {
                console.log('addNewUserThunk error.')
            }
        })
    }
}


export default loginReduser;