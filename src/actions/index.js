import { SIGNED_IN, SET_TASKS } from '../constants';

export const logUser = (email) => {
    return {
        type: SIGNED_IN,
        email
    };
};

export const setTasks = (tasks) => {
    return {
        type: SET_TASKS,
        tasks
    };
};