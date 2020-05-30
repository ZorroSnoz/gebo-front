import apiExpress from '../api_express/api';
import { addCookies } from '../services/cookies_functions';

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';


export type InitialStateType = {
    registered: boolean
    name: null | string
    idUser: null | string
}

let initialState: InitialStateType = {
    registered: false,
    name: null,
    idUser: null
};

const loginReduser = (state = initialState, action: any): InitialStateType => {
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

export type SetUserActionType = {
    type: typeof SET_AUTH_USER_DATA
    userData: object
}

export let setUser = (userData: object): SetUserActionType => ({
    type: SET_AUTH_USER_DATA,
    userData: userData
});

export let addNewUserThunk = (userData: object) => async (dispatch: any) => {
    let response = await apiExpress.addNewUser(userData);

    if (response.data == 'OK') {
        addCookies(userData);
        dispatch(setUser(userData));
        console.log('New user is added.');
    }
    else {
        console.log('addNewUserThunk error.')
    }
}


export default loginReduser;