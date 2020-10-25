import { user } from './user';
import { authenticateUser } from '../action-creators'

it('initializes state when called without state', () => {
    const state = user();

    expect(state.userName).toStrictEqual('');
});

it('no-ops when called without an action', () => {
    const originalState = { userName: 'myExistingState' };
    const state = user(originalState);

    expect(state.userName).toStrictEqual('myExistingState')
});

it('sets username for AUTHENTICATE_USER actions', () => {
    const state = user(undefined, authenticateUser('myUserName'))

    expect(state.userName).toStrictEqual('myUserName')
});
