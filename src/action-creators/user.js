import { AUTHENTICATE_USER } from '../action-types'

export function authenticateUser(userName) {
    return {
        type: AUTHENTICATE_USER,
        userName
    }
}
