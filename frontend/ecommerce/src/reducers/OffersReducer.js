// reducers/productReducers.js
import { OFFER_PRODUCTS_SUCCESS, OFFER_PRODUCTS_FAIL } from '../constants/ProductConstants';

export const offerProductsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case OFFER_PRODUCTS_SUCCESS:
            return { loading: false, products: action.payload };
        case OFFER_PRODUCTS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
