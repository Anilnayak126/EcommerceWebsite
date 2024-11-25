// actions/paymentActions.js
import axios from 'axios';

export const initiatePayPalPayment = (amount) => async (dispatch) => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/paypal/payment/', { amount });
        dispatch({ type: 'PAYPAL_PAYMENT_INITIATED', payload: response.data });
        return response.data; 
    } catch (error) {
        console.error('Error initiating PayPal payment:', error);
        dispatch({ type: 'PAYPAL_PAYMENT_FAILED', payload: error.response.data });
    }
};
