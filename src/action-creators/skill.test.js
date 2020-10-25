import { addSkill } from './skill'
import { ADD_SKILL } from '../action-types'

it('creates an ADD_SKILL action without crashing', () => {
    const action = addSkill(0, 'myName', 'myType', '0', 'myDetail')

    expect(action.type).toStrictEqual(ADD_SKILL);
    expect(action.skill.get('id')).toStrictEqual(0);
    expect(action.skill.get('name')).toStrictEqual('myName');
    expect(action.skill.get('type')).toStrictEqual('myType');
    expect(action.skill.get('DateLearned')).toStrictEqual('0');
    expect(action.skill.get('detail')).toStrictEqual('myDetail');
});
