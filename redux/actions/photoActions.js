import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
import axios from 'axios';
import { GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS, GET_PHOTOS_FAILED } from './types';
import { getCookie } from "../../utils/cookie";

const getPhotos = () => {
    return (dispatch) => {
        dispatch({ type: GET_PHOTOS_REQUEST })

        axios.get(`${publicRuntimeConfig.API}/photos/`)
            .then((response) => {
                dispatch({ type: GET_PHOTOS_SUCCESS, payload: response.data})
            })
    }
}

const getUploads = () => {
    const token = getCookie('access')
    if (token){
        return (dispatch) => {
            dispatch({ type: GET_PHOTOS_REQUEST })
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
    
            axios.get(`${publicRuntimeConfig.API}/photos/uploads/`, config)
                .then((response) => {
                    dispatch({ type: GET_PHOTOS_SUCCESS, payload: response.data})
                })
        }
    }
    
}

export default {
    getPhotos,
    getUploads
};