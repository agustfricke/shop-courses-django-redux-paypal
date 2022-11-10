import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { userLoginReducer, 
        userRegisterReducer, 
        userDetailsReducer, 
        userUpdateProfileReducer,
        userListReducer, 
        userDeleteReducer, 
        userUpdateReducer 
} from './reducers/userReducers'

import { cursoListReducer,
        lastCursoReducer,
        cursoDetailsReducer,
        cursoDeleteReducer,
        cursoCreateReducer,
        cursoUpdateReducer,
        createReviewReducer,


} from './reducers/cursoReducers';


const reducer = combineReducers({

    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    deleteUser: userDeleteReducer,
    userUpdate: userUpdateReducer,

    cursoList: cursoListReducer,
    lastCurso: lastCursoReducer,
    detailsCurso: cursoDetailsReducer,
    cursoDelete: cursoDeleteReducer,
    cursoCreate: cursoCreateReducer,
    cursoUpdate: cursoUpdateReducer,
    createReview: createReviewReducer,

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

