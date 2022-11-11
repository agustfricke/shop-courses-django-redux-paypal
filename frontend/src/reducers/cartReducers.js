import {
    CART_ADD_ITEM,
    CART_DELETE_ITEM,
    CART_CLEAR_ITEMS,
} from '../constants/cartConstants'


export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload
            const existItem = state.cartItems.find(x => x.curso === item.curso)

            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x =>
                        x.curso === existItem.curso ? item : x)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }

        case CART_DELETE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(x => x.curso !== action.payload)
            }

        case CART_CLEAR_ITEMS:
            return {
                ...state,
                cartItems: []
            }
        
        default:
            return state
    }
}