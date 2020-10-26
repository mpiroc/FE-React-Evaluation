import { Map } from 'immutable';
import interest from './interest';
import { addInterest } from '../action-creators';

it('initializes state when none provided', () => {
    const state = interest();

    expect(state.size).toStrictEqual(0);
});

it('no-ops when called without an action', () => {
    const originalState = Map({ myFakeState: 'myFakeStateValue' });
    const state = interest(originalState);

    expect(state.get('myFakeState')).toStrictEqual('myFakeStateValue');
});

it('adds interest to state on ADD_INTEREST action', () => {
    const state = interest(undefined, addInterest(0, 'myName', 'myType', true, 'myDetail'));

    expect(state.getIn([0, 'id'])).toStrictEqual(0);
    expect(state.getIn([0, 'name'])).toStrictEqual('myName');
    expect(state.getIn([0, 'type'])).toStrictEqual('myType');
    expect(state.getIn([0, 'current'])).toStrictEqual(true);
    expect(state.getIn([0, 'detail'])).toStrictEqual('myDetail');
});
