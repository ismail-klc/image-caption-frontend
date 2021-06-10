import { AUTHENTICATE, AUTHENTICATE_FAILED, DEAUTHENTICATE, REGISTER_FAILED, REGISTER_SUCCESS } from '../actions/types';

const initialState = {
    token: null,
    username: null,
    errors: []
};

const authReducer = (state = initialState, action) => {
    let errors = []

    switch (action.type) {
        case AUTHENTICATE:
            state = {
                ...state,
                errors: [],
                token: action.payload.token,
                username: action.payload.user.username
            }
            break;
        case REGISTER_FAILED:
            errors = []
            for (let [key, value] of Object.entries(action.payload)) {
                errors.push(`${key}: ${value}\n`)
            }
            state = {
                ...state,
                errors: [...errors]
            }
            break;
        case REGISTER_SUCCESS:
            state = {
                ...state,
                errors: []
            }
            break;
        case DEAUTHENTICATE:
            return { token: null };
    }
    return state;
};

export default authReducer