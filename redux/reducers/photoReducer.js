import {
    GET_SINGLE_PHOTO,
    GET_PHOTOS_SUCCESS, 
    GET_PHOTOS_FAILED,
    GET_UPLOADS_SUCCESS
} from '../actions/types';

const initialState = {
    photos: [],
    loading: false,
    next_url: null,
    prev_url: null
};

const photoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PHOTOS_FAILED:
            return { photos: [] };
        case GET_PHOTOS_SUCCESS:
            if (action.payload.next && action.payload.previous) {
                return {
                    photos: [...state.photos, ...action.payload.results],
                    next_url: action.payload.next,
                    prev_url: action.payload.previous
                };
            }
            else if (action.payload.next) {
                return {
                    photos: [...action.payload.results],
                    next_url: action.payload.next,
                    prev_url: action.payload.previous
                };
            }
            else if (action.payload.previous) {
                return {
                    photos: [...state.photos, ...action.payload.results],
                    next_url: action.payload.next,
                    prev_url: action.payload.previous
                };
            }
            else {
                return {
                    photos: [...action.payload.results],
                    next_url: action.payload.next,
                    prev_url: action.payload.previous
                };
            }
        case GET_UPLOADS_SUCCESS:
            return {
                photos: [...action.payload]
            }
        case GET_SINGLE_PHOTO:
            if (!state.photos.find(x => x.id === action.payload.id)) {
                return {
                    photos: [...state.photos, action.payload],
                }
            }
        default:
            return state;
    }
};

export default photoReducer