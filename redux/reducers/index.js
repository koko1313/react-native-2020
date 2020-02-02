import {combineReducers} from 'redux';
import * as countriesReducers from './countries';
import * as loadingReducers from './loading';

export default combineReducers(Object.assign(
    countriesReducers,
    loadingReducers,
));