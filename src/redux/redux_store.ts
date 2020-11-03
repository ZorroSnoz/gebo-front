import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form'
import loginReduser from './login_reduser'
import adReduser from './ad_reduser'
import thunkMiddleware from "redux-thunk"

let redusers  = combineReducers(
    {
        loginPage: loginReduser,
        adPage: adReduser,
        form: formReducer
    })

type RedusersType = typeof redusers
export type AppStateType = ReturnType<RedusersType>

// create store and added middleware for thanks
const store = createStore(redusers, applyMiddleware(thunkMiddleware))

// @ts-ignore // for view info in devtools
window.store = store

// @ts-ignore
export default store