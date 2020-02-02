import * as types from '../types';

export function loading(state = false, action) {
    switch(action.type) {
        case types.LOADING_COUNTRIES: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}