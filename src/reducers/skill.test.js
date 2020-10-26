import { Map } from 'immutable';
import skill from './skill';
import { addSkill } from '../action-creators'

it('initializes state when none provided', () => {
    const state = skill()

    expect(state.size).toStrictEqual(0)
})

it('no-ops when called without an action', () => {
    const originalState = Map({ myFakeState: 'myFakeStateValue' })
    const state = skill(originalState)

    expect(state.get('myFakeState')).toStrictEqual('myFakeStateValue')
})

it('adds skill to state on ADD_SKILL action', () => {
    const state = skill(undefined, addSkill(0, 'myName', 'myType', 0, 'myDetail'))

    expect(state.getIn([0, 'id'])).toStrictEqual(0);
    expect(state.getIn([0, 'name'])).toStrictEqual('myName');
    expect(state.getIn([0, 'type'])).toStrictEqual('myType');
    expect(state.getIn([0, 'DateLearned'])).toStrictEqual(0);
    expect(state.getIn([0, 'detail'])).toStrictEqual('myDetail');
})
