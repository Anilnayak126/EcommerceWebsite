// actions/productActions.js
import axios from 'axios';
import { OFFER_PRODUCTS_SUCCESS, OFFER_PRODUCTS_FAIL } from '../constants/ProductConstants';

export const listOfferProducts = () => async (dispatch) => {
    try {
        const { data } = await axios.get('http://127.0.0.1:8000/api/product/offers/');
        dispatch({
            type: OFFER_PRODUCTS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: OFFER_PRODUCTS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
};
