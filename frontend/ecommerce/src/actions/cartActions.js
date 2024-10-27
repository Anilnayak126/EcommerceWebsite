// src/actions/cartActions.js
import axios from 'axios';
import {
    CART_LIST_REQUEST,
    CART_LIST_SUCCESS,
    CART_LIST_FAIL,
    CART_ADD_ITEM_REQUEST,
    CART_ADD_ITEM_SUCCESS,
    CART_ADD_ITEM_FAIL,
    CART_REMOVE_ITEM_REQUEST,
    CART_REMOVE_ITEM_SUCCESS,
    CART_REMOVE_ITEM_FAIL,
    CART_CLEAR_ITEMS
} from '../constants/cartConstants';

// Action to list cart items
export const listCartItems = () => async (dispatch, getState) => {
    try {
        dispatch({ type: CART_LIST_REQUEST });
        
        const { userLogin: { userInfo } } = getState();
        if (!userInfo || !userInfo.token) {
            throw new Error("No token available. Please log in.");
        }
        
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        console.log("Token:", userInfo.token);  
        
        const { data } = await axios.get('http://127.0.0.1:8000/cart/carItems/', config);
        console.log("log",data);
        
        dispatch({ type: CART_LIST_SUCCESS, payload: data });
    } catch (error) {
        console.error("Cart list request failed:", error.message);
        dispatch({ type: CART_LIST_FAIL, payload: error.response ? error.response.data : error.message });
    }
};



export const addToCart = (productId, quantity) => async (dispatch, getState) => {
    try {
        dispatch({ type: CART_ADD_ITEM_REQUEST });
        const { userLogin: { userInfo } } = getState();
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await axios.post('http://127.0.0.1:8000/cart/add/', { product_id: productId, quantity }, config);
        dispatch(listCartItems());
        dispatch({ type: CART_ADD_ITEM_SUCCESS, payload: data });

        // Update cart items in local storage
        const { cart: { cartItems } } = getState();
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    } catch (error) {
        dispatch({ type: CART_ADD_ITEM_FAIL, payload: error.response ? error.response.data : error.message });
    }
};


export const removeFromCart = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: CART_REMOVE_ITEM_REQUEST });
        const { userLogin: { userInfo } } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        await axios.delete(`http://127.0.0.1:8000/cart/remove/${id}/`, config);
        dispatch({ type: CART_REMOVE_ITEM_SUCCESS, payload: id });

       
        const { cart: { cartItems } } = getState();
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    } catch (error) {
        dispatch({ type: CART_REMOVE_ITEM_FAIL, payload: error.response ? error.response.data : error.message });
    }
};

export const clearCart = () => (dispatch) => {
    dispatch({ type: CART_CLEAR_ITEMS });
    localStorage.removeItem('cartItems');  
};

