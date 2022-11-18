import axios from 'axios'
import {
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_CREATE_FAIL,

    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAIL,

    ORDER_LIST_MY_REQUEST,
    ORDER_LIST_MY_SUCCESS,
    ORDER_LIST_MY_FAIL,

    ORDER_LIST_REQUEST,
    ORDER_LIST_SUCCESS,
    ORDER_LIST_FAIL,

    URL_LIST_REQUEST,
    URL_LIST_SUCCESS,
    URL_LIST_FAIL,


    URL_DELETE_REQUEST,
    URL_DELETE_SUCCESS,
    URL_DELETE_FAIL,

    URL_CREATE_REQUEST,
    URL_CREATE_SUCCESS,
    URL_CREATE_FAIL,

    URL_UPDATE_REQUEST,
    URL_UPDATE_SUCCESS,
    URL_UPDATE_FAIL,

    URL_DETAILS_REQUEST,
    URL_DETAILS_SUCCESS,
    URL_DETAILS_FAIL,

} from '../constants/orderConstants'

const URL = 'http://127.0.0.1:8000/'


export const listURLDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: URL_DETAILS_REQUEST })

        const { data } = await axios.get(`${URL}orders/url/${id}/`);

        dispatch({
            type: URL_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: URL_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }
}

export const updateURL = (url) => async (dispatch, getState) => {
    try {
        dispatch({
            type: URL_UPDATE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.put(
            `${URL}orders/updateURL/${url.id}/`,
            url,
            config
        )

        dispatch({
            type: URL_UPDATE_SUCCESS,
            payload: data,
        })

        dispatch({
            type: URL_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: URL_UPDATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const createURL = (title, url) => async (dispatch, getState) => {
    try {
        dispatch({
            type: URL_CREATE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post(
            `${URL}orders/createURL/`,
            {'title':title, 'url':url},
            config
        )

        dispatch({
            type: URL_CREATE_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: URL_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const deleteURL = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: URL_DELETE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.delete(
            `${URL}orders/deleteURL/${id}/`,
            config
        )

        dispatch({
            type: URL_DELETE_SUCCESS
        })

    } catch (error) {
        dispatch({
            type: URL_DELETE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const listURL = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: URL_LIST_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(
            `${URL}orders/url/`,
            config
        )

        dispatch({
            type: URL_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: URL_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const listOrders = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: ORDER_LIST_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(
            `${URL}orders/getOrders/`,
            config
        )

        dispatch({
            type: ORDER_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ORDER_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const createOrder = (order) => async (dispatch, getState) => {
    try {
        dispatch({ type: ORDER_CREATE_REQUEST })

        const {
            userLogin: { userInfo }
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post(
            `${URL}orders/add/`,
            order,
            config
        )

        dispatch({
            type: ORDER_CREATE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ORDER_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const getOrderDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ORDER_DETAILS_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(
            `${URL}orders/${id}/`,
            config
        )

        dispatch({
            type: ORDER_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ORDER_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}



export const listMyOrders = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: ORDER_LIST_MY_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(
            `${URL}orders/getMyOrders/`,
            config
        )

        dispatch({
            type: ORDER_LIST_MY_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ORDER_LIST_MY_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


