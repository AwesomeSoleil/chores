import { SET_TASKS } from '../constants';

export default (state = [], action) => {
    switch (action.type) {
        case SET_TASKS:
            return action.tasks;
        default:
            return state;
    }
};