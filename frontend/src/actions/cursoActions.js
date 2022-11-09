import axios from 'axios';
import {
    CURSO_LIST_REQUEST,
    CURSO_LIST_SUCCESS,
    CURSO_LIST_FAIL,

    CURSO_LAST_REQUEST,
    CURSO_LAST_SUCCESS,
    CURSO_LAST_FAIL,

} from '../constants/cursoConstants';

const URL = 'http://127.0.0.1:8000/'


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


