import { AUTHENTICATE_USER } from '../action-types/user'

export default function user(state = initialUserState, action) {
    switch (action && action.type) {
        case AUTHENTICATE_USER:
            return {
                ...initialUserState,
                userName: action.userName
            };
        default:
            return state;
    }
}

const initialUserState = {
    userName: ''
};
