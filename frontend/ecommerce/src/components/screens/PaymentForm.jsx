// src/components/PaymentForm.js
import React, { useState } from 'react';

const PaymentForm = ({ onPaymentSubmit }) => {
    const [paymentMethod, setPaymentMethod] = useState('paypal'); 
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [paypalEmail, setPaypalEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const paymentDetails = {
            method: paymentMethod,
            cardNumber,
            expiryDate,
            cvv,
            paypalEmail,
        };
        onPaymentSubmit(paymentDetails); 
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Select Payment Method</h3>
            <div>
                <label>
                    <input
                        type="radio"
                        value="paypal"
                        checked={paymentMethod === 'paypal'}
                        onChange={() => setPaymentMethod('paypal')}
                    />
                    PayPal
                </label>
                <label>
                    <input
                        type="radio"
                        value="creditCard"
                        checked={paymentMethod === 'creditCard'}
                        onChange={() => setPaymentMethod('creditCard')}
                    />
                    Credit Card
                </label>
            </div>

            {paymentMethod === 'creditCard' && (
                <div>
                    <h4>Credit Card Information</h4>
                    <div>
                        <label>Card Number:</label>
                        <input
                            type="text"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Expiry Date (MM/YY):</label>
                        <input
                            type="text"
                            value={expiryDate}
                            onChange={(e) => setExpiryDate(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>CVV:</label>
                        <input
                            type="text"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                            required
                        />
                    </div>
                </div>
            )}

            {paymentMethod === 'paypal' && (
                <div>
                    <h4>PayPal Information</h4>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            value={paypalEmail}
                            onChange={(e) => setPaypalEmail(e.target.value)}
                            required
                        />
                    </div>
                </div>
            )}

            <button type="submit" className="btn btn-primary">Submit Payment</button>
        </form>
    );
};

export default PaymentForm;
