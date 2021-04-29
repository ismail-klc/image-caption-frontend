import { GET_SINGLE_PHOTO, GET_PHOTOS_SUCCESS, GET_PHOTOS_FAILED } from '../actions/types';

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