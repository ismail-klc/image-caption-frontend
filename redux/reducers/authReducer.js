import { AUTHENTICATE, DEAUTHENTICATE } from '../actions/types';

const initialState = {
    token: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTHENTICATE:
            return { token: action.payload };
        case DEAUTHENTICATE:
            return { token: null };
        default:
            return state;
    }
};

export default authReducer