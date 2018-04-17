/* import { combineReducers } from 'redux';
import user from './reducer_user';
import tasks from './reducer_tasks';

export default combineReducers(
    {
        user,
        tasks
    }
); */


import { SIGNED_IN } from '../constants';

let user = { email: null };

export default (state = user, action) => {
    switch (action.type) {
        case SIGNED_IN:
            const email = action.email;
            user = {
                email
            };
            return user;
        default:
            return state;
    }
};