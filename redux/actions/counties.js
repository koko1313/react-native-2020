import * as types from '../types';

export function setCountries(countries) {
    return {
        type: types.SET_COUNTIES,
        payload: countries,
    }
}