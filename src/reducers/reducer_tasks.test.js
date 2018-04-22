import reducer_tasks from './reducer_tasks';
import { SET_TASKS } from '../constants';

describe(
    'reducer_tasks', () => {
        it(
            'initially returns an empty array', () => {
                expect(reducer_tasks(undefined, {})).toEqual([]);
            }
        );

        it(
            'on SET_TASKS returns array of tasks fetched from firebase database', () => {
                expect(reducer_tasks([], {type: SET_TASKS, tasks: ['setting a task']})).toEqual(['setting a task']);
            }
        );
    }
);