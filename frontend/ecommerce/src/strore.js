import {createStore,combineReducers,applyMiddleware} from 'redux'
import {thunk} from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import { productListReducers,productDetailsReducers } from './reducers/productReducers';
import { createBrowserRouter } from 'react-router-dom';
import { userLoginReducers, userSignupReducers } from './reducers/userReducer';


const reducer = combineReducers({
    productsList : productListReducers,
    productDetails:productDetailsReducers,
    userLogin:userLoginReducers,
    userSignup:userSignupReducers


})

const intialState = {}
const middleware =[thunk]
const store = createStore(reducer,intialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store;

