import { SIGNED_IN } from '../constants';

export const logUser = (email) => {
    return {
        type: SIGNED_IN,
        email
    };
};