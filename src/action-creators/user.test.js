import { authenticateUser } from './user';
import { AUTHENTICATE_USER } from '../action-types';

it('creates an AUTHENTICATE_USER action without crashing', () => {
    const action = authenticateUser('myUserName');

    expect(action.type).toStrictEqual(AUTHENTICATE_USER);
    expect(action.userName).toStrictEqual('myUserName');
});
