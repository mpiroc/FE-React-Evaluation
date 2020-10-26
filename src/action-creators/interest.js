import { ADD_INTEREST } from '../action-types';
import { Map } from 'immutable';

export function addInterest(id, name, type, current, detail) {
    return {
        type: ADD_INTEREST,
        interest: Map({
            id,
            name,
            type,
            current,
            detail
        })
    };
}
