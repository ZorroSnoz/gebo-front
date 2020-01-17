import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import loginReduser from './login_reduser';
import adReduser from './ad_reduser';

let redusers = combineReducers(
    {
        loginPage: loginReduser,
        adPage: adReduser,
        form: formReducer
    });

const store = createStore(redusers);

window.store = store;
export default store;