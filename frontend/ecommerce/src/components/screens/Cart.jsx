// src/screens/CartScreen.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, listCartItems } from '../../actions/cartActions';
import { initiatePayPalPayment } from '../../actions/paymentActions'; // Import the action
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/cart.css';
import { Link, useNavigate } from 'react-router-dom';

const CartScreen = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.cart.cartItems);

    useEffect(() => {
        if (cartItems.length === 0) {
            dispatch(listCartItems());
        }
    }, [dispatch, cartItems.length]);

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));
    };

    const handleCheckout = async () => {
        const totalPrice = cartItems.reduce((acc, item) => acc + item.product_price * item.quantity, 0).toFixed(2);
        
        try {
            // Initiate PayPal payment
            const order = await dispatch(initiatePayPalPayment(totalPrice));
            if (order && order.links) {
                // Redirect to PayPal for payment approval
                const approvalUrl = order.links.find(link => link.rel === 'approve').href;
                window.open(approvalUrl, '_blank');
            }
        } catch (error) {
            console.error('Payment initiation failed:', error);
        }
    };

    const totalPrice = cartItems.reduce((acc, item) => acc + item.product_price * item.quantity, 0).toFixed(2);

    return (
        <div className="container cart-container my-5">
            <h1 className="text-center mb-4">Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <div className="empty-cart text-center">
                    <h2>TILL YOU HAVEN'T BOUGHT ANYTHING 😔</h2>
                    <p>Why not check out our products?</p>
                    <Link className="btn btn-primary" to="/products">Go to Products</Link>
                </div>
            ) : (
                <>
                    <ul className="list-group mb-4">
                        {cartItems.map((item, index) => (
                            <li key={item.id} className="list-group-item d-flex align-items-center cart-item">
                                <img 
                                    src={`http://127.0.0.1:8000${item.product_image}`} 
                                    alt={item.product_name} 
                                    className="cart-item-image"
                                    loading="lazy"
                                />
                                <div className="flex-grow-1 cart-item-details">
                                    <h5>{item.product_name}</h5>
                                    <p>Price: ${item.product_price.toFixed(2)}</p>
                                    <p>Quantity: {item.quantity}</p>
                                </div>
                                <button 
                                    className="btn btn-danger btn-remove"
                                    onClick={() => handleRemoveFromCart(item.id)}
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>

                    <div className="cart-summary p-3 border rounded shadow-sm">
                        <h4 className="text-center mb-3">Cart Summary</h4>
                        <table className="table table-bordered">
                            <thead className="thead-dark">
                                <tr>
                                    <th>#</th>
                                    <th>Product Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item, index) => (
                                    <tr key={item.id}>
                                        <td>{index + 1}</td>
                                        <td>{item.product_name}</td>
                                        <td>{item.quantity}</td>
                                        <td>${item.product_price.toFixed(2)}</td>
                                        <td>${(item.product_price * item.quantity).toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="4" className="text-right"><strong>Total Price</strong></td>
                                    <td><strong>${totalPrice}</strong></td>
                                </tr>
                            </tfoot>
                        </table>
                        <button 
                            className="btn btn-success w-100 mt-3 btn-buy-now"
                            onClick={handleCheckout}
                            disabled={cartItems.length === 0}
                        >
                            Buy Now
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartScreen;
