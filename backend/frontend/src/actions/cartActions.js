import axios from "axios"

import {
    CART_ADD_ITEM,
    CART_DELETE_ITEM,
} from '../constants/cartConstants'

export const addToCart = (id, quantity) => async (dispatch, getState) => {
    const { data } = await axios.get(`http://127.0.0.1:8000/cursos/curso/${id}`)

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            curso: data.id,
            title: data.title,
            image: data.image,
            price: data.price,
            quantity
        }
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const deleteCart = (id) => (dispatch, getState) => {
    dispatch({
        type: CART_DELETE_ITEM,
        payload: id,
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

