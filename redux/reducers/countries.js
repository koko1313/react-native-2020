import * as types from '../types';

const initialState = [];

export function countries(state = initialState, action) {
    switch(action.type) {
        case types.SET_COUNTIES: {
            return [...action.payload];
        }
        case types.DELETE_COUNTRY: {
            return state.filter(item => item.alpha2Code !== action.payload.alpha2Code);
        }
        default: {
            return state;
        }
    }
}