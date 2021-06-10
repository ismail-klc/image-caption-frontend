import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
import axios from 'axios';
import { ADD_PHOTO_FAILED, ADD_PHOTO_REQUEST, ADD_PHOTO_SUCCESS, GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS, GET_SINGLE_PHOTO, GET_UPLOADS_SUCCESS, HANDLE_DEMO, HANDLE_DEMO_FAILED, HANDLE_DEMO_REQUEST, HANDLE_DEMO_SUCCESS, HANDLE_SEARCH_REQUEST, HANDLE_SEARCH_SUCCESS } from './types';
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

const handleSearch = (caption) => {
    return (dispatch) => {
        dispatch({ type: HANDLE_SEARCH_REQUEST })

        axios.get(`${publicRuntimeConfig.API}/photos/search/?search=${caption}`)
            .then((response) => {
                dispatch({ type: HANDLE_SEARCH_SUCCESS, payload: response.data })
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

const handleDemo = (formData) => {
    return (dispatch) => {

        dispatch({ type: HANDLE_DEMO_REQUEST })

        axios.post(`${publicRuntimeConfig.API}/photos/demo/`, formData)
            .then((response) => {
                console.log(response);
                if (response.status === 200){
                    dispatch({ type: HANDLE_DEMO_SUCCESS, payload: response.data })
                }
                else {
                    dispatch({ type: HANDLE_DEMO_FAILED })
                }
               
            })
    }
}

const clearDemo = () => {
    return (dispatch) => {

        dispatch({ type: HANDLE_DEMO_FAILED })

    }
}

const handleAddPhoto = (formData) => {
    const token = getCookie('access')

    if (token) {
        return async (dispatch) => {
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };

            dispatch({ type: ADD_PHOTO_REQUEST })

            const response = await axios.post(`${publicRuntimeConfig.API}/photos/create/`, formData, config)

            if (response.status === 201) {
                dispatch({ type: ADD_PHOTO_SUCCESS, payload: response.data })
            }
            else {
                dispatch({ type: ADD_PHOTO_FAILED, payload: response.data })
            }
        }
    }
}



export default {
    getPhotos,
    getUploads,
    getSinglePhoto,
    handleDemo,
    handleAddPhoto,
    clearDemo,
    handleSearch
};