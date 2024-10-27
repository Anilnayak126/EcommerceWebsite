// src/reducers/cartReducer.js
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
    CART_CLEAR_ITEMS,
} from '../constants/cartConstants';


const cartItemsFromStorage = localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [];

const initialState = {
    cartItems: cartItemsFromStorage,
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CART_LIST_REQUEST:
            return { ...state, loading: true };
        case CART_LIST_SUCCESS:
            localStorage.setItem('cartItems', JSON.stringify(action.payload.items));
            return { ...state, loading: false, cartItems: action.payload.items };
        case CART_LIST_FAIL:
            return { ...state, loading: false, error: action.payload };

        case CART_ADD_ITEM_REQUEST:
            return { ...state, loading: true };
        case CART_ADD_ITEM_SUCCESS:
            const updatedCartAfterAdd = action.payload.items;
            localStorage.setItem('cartItems', JSON.stringify(updatedCartAfterAdd));
            return {
                ...state,
                loading: false,
                cartItems: updatedCartAfterAdd,
            };
        case CART_ADD_ITEM_FAIL:
            return { ...state, loading: false, error: action.payload };

        case CART_REMOVE_ITEM_REQUEST:
            return { ...state, loading: true };
        case CART_REMOVE_ITEM_SUCCESS:
            const updatedCartAfterRemove = state.cartItems.filter((item) => item.id !== action.payload);
            localStorage.setItem('cartItems', JSON.stringify(updatedCartAfterRemove));
            return {
                ...state,
                loading: false,
                cartItems: updatedCartAfterRemove,
            };
        case CART_REMOVE_ITEM_FAIL:
            return { ...state, loading: false, error: action.payload };
        case CART_CLEAR_ITEMS: 
            return { ...state, cartItems: [] }; 

        default:
            return state;
    }
};
