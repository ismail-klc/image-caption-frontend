
import Router from 'next/router';
import axios from 'axios';
import { AUTHENTICATE, AUTHENTICATE_FAILED, DEAUTHENTICATE, REGISTER_FAILED, REGISTER_SUCCESS } from './types';
import { setCookie, removeCookie, getCookie } from '../../utils/cookie';
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

const login = ({ username, password }) => {
    return (dispatch) => {
        axios.post(`${publicRuntimeConfig.API}/auth/login/`, { username, password })
            .then((response) => {
                console.log(response);
                setCookie('access', response.data.access);
                setCookie('refresh', response.data.refresh);
                Router.push('/');
                dispatch({ type: AUTHENTICATE, payload: response.data.access });
            })
            .catch((err) => {
                console.log(err.response);
                if (err.response){
                    dispatch({ type: REGISTER_FAILED, payload: err.response.data });
                }
            });
    };
};

const register = (first_name,last_name,username,email,password,password2) => {
    return (dispatch) => {
        axios.post(`${publicRuntimeConfig.API}/auth/register/`, {first_name,last_name,username,email,password,password2})
            .then((response) => {
                console.log(response);
                Router.push('/login');
                dispatch({ type: REGISTER_SUCCESS });
            })
            .catch((err) => {
                if (err.response){
                    dispatch({ type: REGISTER_FAILED, payload: err.response.data });
                }
            });
    };
}

const privateRoutes = ['/profile']

const reauthenticate = (pathname) => {
    const token = getCookie('access')

    if (token) {
        return (dispatch) => {
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };

            axios.get(`${publicRuntimeConfig.API}/auth/me/`, config)
                .then((response) => {
                    dispatch({ type: AUTHENTICATE, payload: {token, user: response.data} });
                })
                .catch((err) => {
                    console.log(err);
                    removeCookie('access');
                    removeCookie('refresh');
                    dispatch({ type: DEAUTHENTICATE });
                    if (privateRoutes.find(x => x === pathname)){
                        Router.back()
                    }
                });
        };
    }

    return (dispatch) => {
        removeCookie('access');
        removeCookie('refresh');
        dispatch({ type: DEAUTHENTICATE });
        if (privateRoutes.find(x => x === pathname)){
            Router.back()
        }
    };
};

const deauthenticate = () => {
    return (dispatch) => {
        removeCookie('access');
        removeCookie('refresh');
        Router.push('/login');
        dispatch({ type: DEAUTHENTICATE });
    };
};

export default {
    login,
    reauthenticate,
    deauthenticate,
    register
};