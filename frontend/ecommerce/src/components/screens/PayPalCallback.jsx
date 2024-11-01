// src/screens/PayPalCallback.js
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PayPalCallback = () => {
    const location = useLocation();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const orderId = queryParams.get('orderID');

        if (orderId) {
            // Call your API to capture the payment
            fetch(`/api/paypal/callback/?orderID=${orderId}`)
                .then((response) => response.json())
                .then((data) => {
                    console.log('Payment captured:', data);
                    // Handle the response data as needed (e.g., update order status)
                })
                .catch((error) => {
                    console.error('Error capturing payment:', error);
                });
        }
    }, [location]);

    return <div>Processing your payment...</div>;
};

export default PayPalCallback;
