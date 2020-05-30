import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form'
import loginReduser from './login_reduser';
import adReduser from './ad_reduser';
import thunkMiddleware from "redux-thunk";

let redusers  = combineReducers(
    {
        loginPage: loginReduser,
        adPage: adReduser,
        form: formReducer
    });

const store = createStore(redusers, applyMiddleware(thunkMiddleware));

export default store;