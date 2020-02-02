import {combineReducers} from 'redux';
import * as countriesReducers from './countries';

export default combineReducers({
    countries: countriesReducers.countries
});