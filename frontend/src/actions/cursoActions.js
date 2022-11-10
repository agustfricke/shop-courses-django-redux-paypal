import axios from 'axios';
import {
    CURSO_LIST_REQUEST,
    CURSO_LIST_SUCCESS,
    CURSO_LIST_FAIL,

    CURSO_LAST_REQUEST,
    CURSO_LAST_SUCCESS,
    CURSO_LAST_FAIL,

    CURSO_DETAILS_REQUEST,
    CURSO_DETAILS_SUCCESS,
    CURSO_DETAILS_FAIL,

    CURSO_DELETE_REQUEST,
    CURSO_DELETE_SUCCESS,
    CURSO_DELETE_FAIL,

    CURSO_CREATE_REQUEST,
    CURSO_CREATE_SUCCESS,
    CURSO_CREATE_FAIL,

    CURSO_UPDATE_REQUEST,
    CURSO_UPDATE_SUCCESS,
    CURSO_UPDATE_FAIL,

    CURSO_CREATE_REVIEW_REQUEST,
    CURSO_CREATE_REVIEW_SUCCESS,
    CURSO_CREATE_REVIEW_FAIL,

} from '../constants/cursoConstants';

const URL = 'http://127.0.0.1:8000/'


export const createCursoReview = (cursoId, review) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CURSO_CREATE_REVIEW_REQUEST
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
            `${URL}cursos/${cursoId}/reviews/`,
            review,
            config
        )

        dispatch({
            type: CURSO_CREATE_REVIEW_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: CURSO_CREATE_REVIEW_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const updateCurso = (curso) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CURSO_UPDATE_REQUEST
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
            `${URL}cursos/update/${curso.id}/`,
            curso,
            config
        )

        dispatch({
            type: CURSO_UPDATE_SUCCESS,
            payload: data,
        })

        dispatch({
            type: CURSO_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CURSO_UPDATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}



export const createCurso = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: CURSO_CREATE_REQUEST
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
            `${URL}cursos/create/`,
            {},
            config
        )

        dispatch({
            type: CURSO_CREATE_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: CURSO_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const deleteCurso = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CURSO_DELETE_REQUEST
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
            `${URL}cursos/delete/${id}/`,
            config
        )

        dispatch({
            type: CURSO_DELETE_SUCCESS
        })

    } catch (error) {
        dispatch({
            type: CURSO_DELETE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const listCursoDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: CURSO_DETAILS_REQUEST })

        const { data } = await axios.get(`${URL}cursos/curso/${id}`);

        dispatch({
            type: CURSO_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CURSO_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }
}


export const listCursos = (keysearch = '') => async (dispatch) => {
    try {
        dispatch({ type: CURSO_LIST_REQUEST })

        const { data } = await axios.get(`${URL}cursos/${keysearch}`);

        dispatch({
            type: CURSO_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CURSO_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }
}


export const listLastCursos = () => async (dispatch) => {
    try {
        dispatch({ type: CURSO_LAST_REQUEST })

        const { data } = await axios.get(`${URL}cursos/last`);

        dispatch({
            type: CURSO_LAST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CURSO_LAST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }
}


