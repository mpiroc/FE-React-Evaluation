import { ADD_INTEREST } from '../action-types/interest'
import { Map } from 'immutable'

export default function interest(state = Map(), action) {
    switch(action && action.type) {
        case ADD_INTEREST:
            const id = action.interest.get('id')
            if (!state.has(id)) {
                return state.set(id, action.interest)
            }

            return state.set(id, state.get(id).merge(action.interest));
        default:
            return state;
    }
}
