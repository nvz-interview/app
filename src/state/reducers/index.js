import {combineReducers} from 'redux';

import config from './config';
import users from './users';

export default combineReducers({
    config,
    users
});
