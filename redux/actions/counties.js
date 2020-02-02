import * as types from '../types';

export function setCountries(countries) {
    return {
        type: types.SET_COUNTIES,
        payload: countries,
    }
}

export function deleteCountry(country) {
    return {
        type: types.DELETE_COUNTRY,
        payload: country
    }
}