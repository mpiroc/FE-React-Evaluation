import { AUTHENTICATE_USER } from '../action-types/user'
import { Map } from 'immutable'

export default function user(state = initialUserState, action) {
    switch (action && action.type) {
        case AUTHENTICATE_USER:
            return state.set('userName', action.userName)
        default:
            return state;
    }
}

const initialUserState = Map({
    userName: ''
})
