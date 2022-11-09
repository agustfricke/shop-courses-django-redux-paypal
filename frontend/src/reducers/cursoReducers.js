import {
    CURSO_LIST_REQUEST,
    CURSO_LIST_SUCCESS,
    CURSO_LIST_FAIL,

    CURSO_LAST_REQUEST,
    CURSO_LAST_SUCCESS,
    CURSO_LAST_FAIL,

} from '../constants/cursoConstants';

export const cursoListReducer = (state = { cursos: [] }, action) => {
    switch (action.type) {
        case CURSO_LIST_REQUEST:
            return { loading: true, cursos: [] }

        case CURSO_LIST_SUCCESS:
            return { loading: false, cursos: action.payload }

        case CURSO_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const lastCursoReducer = (state = { cursos: [] }, action) => {
    switch (action.type) {
        case CURSO_LAST_REQUEST:
            return { loading: true, cursos: [] }

        case CURSO_LAST_SUCCESS:
            return { loading: false, cursos: action.payload }

        case CURSO_LAST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}