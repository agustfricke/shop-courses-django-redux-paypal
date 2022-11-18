import {
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_CREATE_FAIL,
    ORDER_CREATE_RESET,

    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAIL,

    ORDER_LIST_MY_REQUEST,
    ORDER_LIST_MY_SUCCESS,
    ORDER_LIST_MY_FAIL,
    ORDER_LIST_MY_RESET,

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
    URL_CREATE_RESET,

    URL_UPDATE_REQUEST,
    URL_UPDATE_SUCCESS,
    URL_UPDATE_FAIL,
    URL_UPDATE_RESET,

    URL_DETAILS_REQUEST,
    URL_DETAILS_SUCCESS,
    URL_DETAILS_FAIL,

} from '../constants/orderConstants'



export const urlDetailsReducer = (state = { urlSolo: {} }, action) => { 
    switch (action.type) {
        case URL_DETAILS_REQUEST:
            return { loading: true, ...state }

        case URL_DETAILS_SUCCESS:
            return { loading: false, urlSolo: action.payload }

        case URL_DETAILS_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const urlUpdateReducer = (state = { url: {} }, action) => {
    switch (action.type) {
        case URL_UPDATE_REQUEST:
            return { loading: true }

        case URL_UPDATE_SUCCESS:
            return { loading: false, success: true, url: action.payload }

        case URL_UPDATE_FAIL:
            return { loading: false, error: action.payload }

        case URL_UPDATE_RESET:
            return { url: {} }

        default:
            return state
    }
}


export const urlCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case URL_CREATE_REQUEST:
            return { loading: true }

        case URL_CREATE_SUCCESS:
            return { loading: false, success: true, url: action.payload }

        case URL_CREATE_FAIL:
            return { loading: false, error: action.payload }

        case URL_CREATE_RESET:
            return {}

        default:
            return state
    }
}

export const urlDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case URL_DELETE_REQUEST:
            return { loading: true }

        case URL_DELETE_SUCCESS:
            return { loading: false, success: true }

        case URL_DELETE_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}


export const urlListReducer = (state = { urls: [] }, action) => {
    switch (action.type) {
        case URL_LIST_REQUEST:
            return { loading: true }

        case URL_LIST_SUCCESS:
            return { loading: false, urls: action.payload }

        case URL_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}


export const orderListReducer = (state = { orders: [] }, action) => {
    switch (action.type) {
        case ORDER_LIST_REQUEST:
            return { loading: true }

        case ORDER_LIST_SUCCESS:
            return { loading: false, orders: action.payload }

        case ORDER_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}


export const orderCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case ORDER_CREATE_REQUEST:
            return { loading: true }

        case ORDER_CREATE_SUCCESS:
            return { loading: false, success: true, order: action.payload }

        case ORDER_CREATE_FAIL:
            return { loading: false, error: action.payload }

        case ORDER_CREATE_RESET:
            return {}

        default:
            return state
    }
}

export const orderDetailsReducer = (state = { loading: true, orderItems: [] }, action) => {
    switch (action.type) {
        case ORDER_DETAILS_REQUEST:
            return { ...state, loading: true }

        case ORDER_DETAILS_SUCCESS:
            return { loading: false, order: action.payload }

        case ORDER_DETAILS_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}


export const orderListMyReducer = (state = { orders: [] }, action) => {
    switch (action.type) {
        case ORDER_LIST_MY_REQUEST:
            return { loading: true }

        case ORDER_LIST_MY_SUCCESS:
            return { loading: false, orders: action.payload }

        case ORDER_LIST_MY_FAIL:
            return { loading: false, error: action.payload }

        case ORDER_LIST_MY_RESET:
            return { orders: [] }

        default:
            return state
    }
}
