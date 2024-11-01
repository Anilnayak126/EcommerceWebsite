// src/store.js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productListReducers, productDetailsReducers } from './reducers/productReducers';
import { userLoginReducers, userSignupReducers } from './reducers/userReducer';
import { cartReducer } from './reducers/cartReducers'; // Import cart reducer
import { offerProductsReducer } from './reducers/OffersReducer';
import paymentReducer from './reducers/paymentReducer';

const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null;

const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
};

const reducer = combineReducers({
    productsList: productListReducers,
    productDetails: productDetailsReducers,
    userLogin: userLoginReducers,
    userSignup: userSignupReducers,
    cart: cartReducer,  
    offerProducts : offerProductsReducer,
    payment: paymentReducer,
});

const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
