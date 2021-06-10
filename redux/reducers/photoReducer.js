import {
    GET_SINGLE_PHOTO,
    GET_PHOTOS_SUCCESS,
    GET_PHOTOS_FAILED,
    GET_UPLOADS_SUCCESS,
    ADD_PHOTO_SUCCESS,
    ADD_PHOTO_REQUEST,
    ADD_PHOTO_FAILED,
    HANDLE_DEMO_REQUEST,
    HANDLE_DEMO_SUCCESS,
    HANDLE_DEMO_FAILED,
    HANDLE_SEARCH_SUCCESS
} from '../actions/types';

const initialState = {
    photos: [],
    loading: false,
    next_url: null,
    prev_url: null,
    demo: ''
};

const photoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PHOTOS_FAILED:
            return { photos: [] };
        case GET_PHOTOS_SUCCESS:
            let newPhotos = []
            if (action.payload.next && action.payload.previous) {
                newPhotos = [...state.photos, ...action.payload.results]
            }
            else if (action.payload.next) {
                newPhotos = [...action.payload.results]
            }
            else if (action.payload.previous) {
                newPhotos = [...state.photos, ...action.payload.results]
            }
            else {
                newPhotos = [...action.payload.results]
            }
            return {
                photos: newPhotos,
                next_url: action.payload.next,
                prev_url: action.payload.previous
            };
        case GET_UPLOADS_SUCCESS:
            return {
                photos: [...action.payload],
                next_url: null,
                prev_url: null,
                loading: false
            }
        case HANDLE_SEARCH_SUCCESS:
            return {
                photos: [...action.payload],
                next_url: null,
                prev_url: null,
                loading: false
            }
        case GET_SINGLE_PHOTO:
            if (!state.photos.find(x => x.id === action.payload.id)) {
                return {
                    photos: [...state.photos, action.payload],
                }
            }
        case HANDLE_DEMO_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case HANDLE_DEMO_SUCCESS:
            state = {
                ...state,
                demo: action.payload.caption,
                loading: false
            }
            break;
        case HANDLE_DEMO_FAILED:
            state = {
                ...state,
                loading: false,
                demo: ''
            }
            break;
        case ADD_PHOTO_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case ADD_PHOTO_SUCCESS:
            state = {
                ...state,
                photos: [action.payload, ...state.photos],
                loading: false
            }
            break;
        case ADD_PHOTO_FAILED:
            state = {
                ...state,
                loading: false
            }
            break;
    }
    return state;

};

export default photoReducer