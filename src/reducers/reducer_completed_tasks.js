import { SET_COMPLETED } from '../constants';

export default (state = [], action) => {
    if (action.type === SET_COMPLETED) {
        return action.completedTasks;
    } else {
        return state;
    }
};