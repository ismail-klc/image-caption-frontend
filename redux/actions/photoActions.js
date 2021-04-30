import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
import axios from 'axios';
import { GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS, GET_SINGLE_PHOTO, GET_UPLOADS_SUCCESS } from './types';
import { getCookie } from "../../utils/cookie";

const getPhotos = (url) => {
    let api_url
    if (url) {
        api_url = url
    }
    else {
        api_url = `${publicRuntimeConfig.API}/photos/`
    }

    return (dispatch) => {
        dispatch({ type: GET_PHOTOS_REQUEST })

        axios.get(api_url)
            .then((response) => {
                dispatch({ type: GET_PHOTOS_SUCCESS, payload: response.data })
            })
    }
}

const getUploads = () => {
    const token = getCookie('access')
    if (token) {
        return (dispatch) => {
            dispatch({ type: GET_PHOTOS_REQUEST })
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };

            axios.get(`${publicRuntimeConfig.API}/photos/uploads/`, config)
                .then((response) => {
                    dispatch({ type: GET_UPLOADS_SUCCESS, payload: response.data })
                })
        }
    }
}

const getSinglePhoto = (id) => {
    return (dispatch) => {
        axios.get(`${publicRuntimeConfig.API}/photos/${id}/`)
            .then((response) => {
                console.log(response);
                dispatch({ type: GET_SINGLE_PHOTO, payload: response.data })
            })
    }
}

export default {
    getPhotos,
    getUploads,
    getSinglePhoto
};