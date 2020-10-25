import { ADD_SKILL } from '../action-types'
import { Map } from 'immutable'

export function addSkill(id, name, type, DateLearned, detail) {
    return {
        type: ADD_SKILL,
        skill: Map({
            id,
            name,
            type,
            DateLearned,
            detail
        })
    };
}
