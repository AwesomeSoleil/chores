import reducer_user from './reducer_user';
import { SIGNED_IN } from '../constants';

describe(
    'reducer_user', () => {
        const initialState = {
            email: null
        };
        
        it(
            'initially returns email === null', () => {
                expect(reducer_user(undefined, {})).toEqual({ email: null });
            }
        );
    }
);