import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { userLoginReducer, 
        userRegisterReducer, 
        userDetailsReducer, 
        userUpdateProfileReducer,
        userListReducer, 
        userDeleteReducer, 
        userUpdateReducer,
        passwordRestReducer,
        passwordConfirmReducer,
        userActivationReducer,
        userPremumReducer,
} from './reducers/userReducers'

import { cursoListReducer,
        lastCursoReducer,
        cursoDetailsReducer,
        cursoDeleteReducer,
        cursoCreateReducer,
        cursoUpdateReducer,
        createReviewReducer,
        createEpisodioReducer,
        episodioUpdateReducer,
        episodioDetailsReducer,
        createCommentReducer,
        episodioAllReducer,
        episodioDeleteReducer,


} from './reducers/cursoReducers';


import { orderCreateReducer, 
        orderDetailsReducer,
        orderListMyReducer,
        orderListReducer,
        urlListReducer,
        urlDeleteReducer,
        urlCreateReducer,
        urlUpdateReducer,
        urlDetailsReducer,

} from './reducers/orderReducers'



const reducer = combineReducers({


    // Order
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderListMy: orderListMyReducer,
    orderList: orderListReducer,
    urlList :urlListReducer,
    urlDelete:urlDeleteReducer,
    urlCreate:urlCreateReducer,
    urlUpdate:urlUpdateReducer,
    urlDetails:urlDetailsReducer,


    // User
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    deleteUser: userDeleteReducer,
    userUpdate: userUpdateReducer,
    passwordRest:passwordRestReducer,
    passwordConfirm:passwordConfirmReducer,
    userActivation:userActivationReducer,
    userPremum: userPremumReducer,

    // Curso 
    cursoList: cursoListReducer,
    lastCurso: lastCursoReducer,
    detailsCurso: cursoDetailsReducer,
    cursoDelete: cursoDeleteReducer,
    cursoCreate: cursoCreateReducer,
    cursoUpdate: cursoUpdateReducer,
    createReview: createReviewReducer,
    createEpisodio: createEpisodioReducer,
    episodioUpdate: episodioUpdateReducer,
    episodioDetails: episodioDetailsReducer,
    createComment: createCommentReducer,
    episodioAll: episodioAllReducer,
    episodioDelete:episodioDeleteReducer,

})




const userInfoStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    // cart: { cartItems: cartItemsStorage},
    userLogin: { userInfo: userInfoStorage }
}

const middleware = [thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store

