import { GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS, GET_PHOTOS_FAILED } from '../actions/types';

const initialState = {
    photos: [],
    loading: false,
};

const photoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PHOTOS_FAILED:
            return { photos: []};
        case GET_PHOTOS_SUCCESS:
            return { photos: [...action.payload]};
        default:
            return state;
    }
};

export default photoReducer