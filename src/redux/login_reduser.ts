import apiExpress from '../api_express/api'
import { addCookies } from '../services/cookies_functions'
import {AdDataType, InitialStateAndUserDataType, LoginFormDataType} from '../types/types'
import {generatorId} from '../services/generator_id'
import {ThunkAction} from 'redux-thunk'
import {AppStateType} from './redux_store'
import {AxiosResponse} from "axios";

///////////// Const for actioncreators
const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'

///////////// Initial state
let initialState: InitialStateAndUserDataType = {
    registered: false,
    name: null,
    idUser: null
}

///////////// Reduser
const loginReduser = (state = initialState, action: ActionsTypes): InitialStateAndUserDataType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...action.userData
            }
        }
        default: {
            return state
        }
    }

}

///////////// Actioncreators
// actions types
type ActionsTypes = SetUser_ActionType
//
type SetUser_ActionType = {
    type: typeof SET_AUTH_USER_DATA
    userData: InitialStateAndUserDataType
}
export let setUser = (userData: InitialStateAndUserDataType): SetUser_ActionType => ({
    type: SET_AUTH_USER_DATA,
    userData: userData
})

///////////// Thanks
// types for thunks
type ThunkActions = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>
//
export let addNewUserThunk = (formData: LoginFormDataType): ThunkActions => async (dispatch) => {

    let userData = { registered: true, name: formData.login, idUser: generatorId() }

    let response: AxiosResponse<string> = await apiExpress.addNewUser(userData)

    if (response.data == 'OK') {
        addCookies(userData)
        dispatch(setUser(userData))
        console.log('New user is added.')
    }
    else {
        console.log('addNewUserThunk error.')
    }
}
/////////////

export default loginReduser