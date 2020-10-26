import {combineReducers} from 'redux';
import user from './user';
import interest from './interest';
import skill from './skill';

export default combineReducers({
    interest,
    skill,
    user,
});
