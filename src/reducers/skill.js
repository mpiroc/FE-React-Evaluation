import { ADD_SKILL } from '../action-types/skill'
import { Map } from 'immutable'

export default function skill(state = Map(), action) {
    switch(action && action.type) {
        case ADD_SKILL:
            const id = action.skill.get('id')
            if (!state.has(id)) {
                return state.set(id, action.skill)
            }

            return state.set(id, state.get(id).merge(action.skill));
        default:
            return state;
    }
}
