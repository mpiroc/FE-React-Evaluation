import { addInterest } from './interest';
import { ADD_INTEREST } from '../action-types';

it('creates an ADD_INTEREST action without crashing', () => {
    const action = addInterest(0, 'myName', 'myType', true, 'myDetail');

    expect(action.type).toStrictEqual(ADD_INTEREST);
    expect(action.interest.get('id')).toStrictEqual(0);
    expect(action.interest.get('name')).toStrictEqual('myName');
    expect(action.interest.get('type')).toStrictEqual('myType');
    expect(action.interest.get('current')).toStrictEqual(true);
    expect(action.interest.get('detail')).toStrictEqual('myDetail');
});
