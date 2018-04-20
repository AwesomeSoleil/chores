import { SET_COMPLETED } from '../constants';

export default (state = [], action) => {
    switch (action.type) {
        case SET_COMPLETED:
            return action.completedTasks;
        default:
            return state;
    }
};

/* export default (state = [], action) => {
    switch (action.type) {
        case SET_COMPLETED:
        const newState = action.completedTasks;
            return [...state, newState];
        default:
            return state;
    }
}; */