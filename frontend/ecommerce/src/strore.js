import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productListReducers, productDetailsReducers } from './reducers/productReducers';
import { userLoginReducers, userSignupReducers } from './reducers/userReducer';

// Get userInfo from localStorage if available
const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null;

// Set the initial state with userInfo if it exists in localStorage
const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
};

const reducer = combineReducers({
    productsList: productListReducers,
    productDetails: productDetailsReducers,
    userLogin: userLoginReducers,
    userSignup: userSignupReducers,
});

const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
