import { AUTHENTICATE, DEAUTHENTICATE } from '../actions/types';

const initialState = {
    token: null,
    username: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTHENTICATE:
            return { token: action.payload.token, username: action.payload.user.username };
        case DEAUTHENTICATE:
            return { token: null };
        default:
            return state;
    }
};

export default authReducer