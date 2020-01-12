import {createStore, combineReducers} from 'redux';
import loginReduser from './login_reduser';
import adReduser from './ad_reduser';

let redusers = combineReducers({loginReduser, adReduser});

const store = createStore(redusers);

window.store = store;
export default store;