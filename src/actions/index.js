import { SIGNED_IN, SET_TASKS, SET_COMPLETED } from '../constants';

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

export const setCompleted = (completedTasks) => {
    return {
        type: SET_COMPLETED,
        completedTasks
    };
};