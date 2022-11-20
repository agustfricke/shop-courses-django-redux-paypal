import axios from 'axios'
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,

    USER_REGISTER_REQUEST,
    USER_REGISTER_FAIL,
    USER_REGISTER_SUCCESS,

    USER_DETAILS_REQUEST,
    USER_DETAILS_FAIL,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_RESET,

    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_SUCCESS,

    USER_LIST_REQUEST,
    USER_LIST_FAIL,
    USER_LIST_SUCCESS,
    USER_LIST_RESET,

    USER_DELETE_REQUEST,
    USER_DELETE_FAIL,
    USER_DELETE_SUCCESS,

    USER_UPDATE_REQUEST,
    USER_UPDATE_FAIL,
    USER_UPDATE_SUCCESS,

    PASSWORD_RESET_REQUEST,
    PASSWORD_RESET_SUCCESS,
    PASSWORD_RESET_FAIL,

    PASSWORD_RESET_CONFIRM_REQUEST,
    PASSWORD_RESET_CONFIRM_SUCCESS,
    PASSWORD_RESET_CONFIRM_FAIL,

    ACTIVATION_REQUEST,
    ACTIVATION_SUCCESS,
    ACTIVATION_FAIL,

    USER_PREMIUM_REQUEST,
    USER_PREMIUM_SUCCESS,
    USER_PREMIUM_FAIL,

} from '../constants/userConstants'


import { ORDER_LIST_MY_RESET } from '../constants/orderConstants'

const URL = 'http://127.0.0.1:8000/'



export const premiumUser = (user) => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_PREMIUM_REQUEST })
        dispatch({ type: USER_DETAILS_RESET })

        const {
            userLogin: { userInfo }
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.put(
            `${URL}users/premium/`,
            user,
            config
        )

        dispatch({
            type: USER_PREMIUM_SUCCESS,
            payload: data
        })

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: USER_PREMIUM_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const activation = (uid, token) => async (dispatch) => {
    try {
        dispatch({ type: ACTIVATION_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(
            `${URL}auth/users/activation/`,
            { 'uid': uid, 'token': token }, config
        )

        dispatch({
            type: ACTIVATION_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: ACTIVATION_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const Confirm = (uid, token, new_password, re_new_password) => async (dispatch) => {
    try {
        dispatch({ type: PASSWORD_RESET_CONFIRM_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(
            `${URL}auth/users/reset_password_confirm/`,
            { 'uid': uid, 'token':token, 'new_password':new_password, 're_new_password':re_new_password }, config
        )

        dispatch({
            type: PASSWORD_RESET_CONFIRM_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: PASSWORD_RESET_CONFIRM_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const Reset = (email) => async (dispatch) => {
    try {
        dispatch({ type: PASSWORD_RESET_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(
            `${URL}auth/users/reset_password/`,
            { 'email': email }, config
        )

        dispatch({
            type: PASSWORD_RESET_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: PASSWORD_RESET_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}



export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(
            `${URL}users/login/`,
            { 'email': email, 'password': password }, config
        )

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({ type: USER_LOGOUT })
    dispatch({ type: USER_DETAILS_RESET })
    dispatch({ type: ORDER_LIST_MY_RESET })
    dispatch({ type: USER_LIST_RESET })
}


export const register = (first_name, email, user_name,  password, re_password) => async (dispatch) => {
    try {
        dispatch({ type: USER_REGISTER_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(
            `${URL}auth/users/`,
            { 'first_name': first_name, 'email': email, 'user_name':user_name, 'password': password , 're_password':re_password}, config
        )

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const getUserDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_DETAILS_REQUEST })

        const {
            userLogin: { userInfo }
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(
            `${URL}users/${id}/`,
            config
        )

        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: USER_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const updateUserProfile = (user) => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_UPDATE_PROFILE_REQUEST })
        dispatch({ type: USER_DETAILS_RESET })

        const {
            userLogin: { userInfo }
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.put(
            `${URL}users/put/`,
            user,
            config
        )

        dispatch({
            type: USER_UPDATE_PROFILE_SUCCESS,
            payload: data
        })

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: USER_UPDATE_PROFILE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const listUsers = () => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_LIST_REQUEST })

        const {
            userLogin: { userInfo }
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(
            `${URL}users/all/`,
            config
        )

        dispatch({
            type: USER_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: USER_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const deleteUser = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_DELETE_REQUEST
        })

        const {
            userLogin: { userInfo }
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.delete(
            `${URL}users/delete/${id}/`,
            config
        )

        dispatch({
            type: USER_DELETE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: USER_DELETE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const updateUser = (user) => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_UPDATE_REQUEST })

        const {
            userLogin: { userInfo }
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.put(
            `${URL}users/update/${user.id}/`,
            user,
            config
        )

        dispatch({
            type: USER_UPDATE_SUCCESS,
        })

        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: USER_UPDATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}