// reducers/paymentReducer.js

const initialState = {
    order: null,
    error: null,
};

const paymentReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PAYPAL_PAYMENT_INITIATED':
            return { ...state, order: action.payload, error: null };
        case 'PAYPAL_PAYMENT_FAILED':
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

export default paymentReducer;
