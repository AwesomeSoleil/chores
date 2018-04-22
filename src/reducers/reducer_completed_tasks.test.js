import reducer_completed_tasks from './reducer_completed_tasks';
import { SET_COMPLETED } from '../constants';

describe(
    'reducer_completed_tasks', () => {
        it(
            'initially returns an empty array', () => {
                expect(reducer_completed_tasks(undefined, {})).toEqual([]);
            }
        );

        it(
            'on SET_COMPLETED returns array of tasks fetched from firebase database', () => {
                expect(reducer_completed_tasks([], {type: SET_COMPLETED, completedTasks: ['retrieving task']})).toEqual(['retrieving task']);
            }
        );
    }
);