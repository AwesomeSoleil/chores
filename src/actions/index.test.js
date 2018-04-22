import * as actions from './index';
import { SIGNED_IN, SET_TASKS, SET_COMPLETED } from '../constants';

describe(
    'actions', () => {
        let expectedAction;
        it(
            'on SET_TASKS action should accept array of tasks and return it wrapped in action object', () => {
                const thingsToDo = ['sample task'];
                expectedAction = {
                    type: SET_TASKS,
                    tasks: thingsToDo
                };
                expect(actions.setTasks(thingsToDo)).toEqual(expectedAction);
            }
        );

        it(
            'on SET_COMPLETED action should accept array of completed tasks and return it wrapped in action object', () => {
                const accomplishedTasks = ['accomplished task'];
                expectedAction = {
                    type: SET_COMPLETED,
                    completedTasks: accomplishedTasks
                };
                expect(actions.setCompleted(accomplishedTasks)).toEqual(expectedAction);
            }
        );

        it(
            'on SIGNED_IN action should accept user email string and return it wrapped in action object', () => {
                const loggedInUserEmail = 'test@test.org';
                expectedAction = {
                    type: SIGNED_IN,
                    email: loggedInUserEmail
                };
                expect(actions.logUser(loggedInUserEmail)).toEqual(expectedAction);
            }
        );
    }
);