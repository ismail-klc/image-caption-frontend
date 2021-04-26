
import Router from 'next/router';
import axios from 'axios';
import { AUTHENTICATE, DEAUTHENTICATE } from './types';
import { setCookie, removeCookie } from '../../utils/cookie';
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

const login = ({ username, password }) => {

    console.log(publicRuntimeConfig.API);
    return (dispatch) => {
        axios.post(`http://127.0.0.1:8000/auth/login/`, { username, password })
            .then((response) => {
                console.log(response);
                setCookie('access', response.data.access);
                setCookie('refresh', response.data.refresh);
                Router.push('/');
                dispatch({ type: AUTHENTICATE, payload: response.data.token });
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export default {
    login
};