import apiExpress from '../api_express/api'
import { addCookies } from '../services/cookies_functions'

///////////// Const for actioncreators
const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'

///////////// Initial state
type InitialStateTypeAndUserData = {
    registered: boolean
    name: null | string
    idUser: null | string
}
let initialState: InitialStateTypeAndUserData = {
    registered: false,
    name: null,
    idUser: null
};

///////////// Reduser
const loginReduser = (state = initialState, action: SetUser_ActionType): InitialStateTypeAndUserData => {
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

///////////// Actioncreators
type SetUser_ActionType = {
    type: typeof SET_AUTH_USER_DATA
    userData: InitialStateTypeAndUserData
}
export let setUser = (userData: InitialStateTypeAndUserData): SetUser_ActionType => ({
    type: SET_AUTH_USER_DATA,
    userData: userData
})

///////////// Thanks
//:todo need fin any type in dispatch
export let addNewUserThunk = (userData: InitialStateTypeAndUserData) => async (dispatch: any) => {
    let response = await apiExpress.addNewUser(userData);

    if (response.data == 'OK') {
        addCookies(userData);
        dispatch(setUser(userData))
        console.log('New user is added.')
    }
    else {
        console.log('addNewUserThunk error.')
    }
}
/////////////

export default loginReduser