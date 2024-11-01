import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rating from '../loader/Ratings';
import '../style/S_products.css'; 
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';
import { DetailsProduct } from '../../actions/productsActions';
import { useDispatch, useSelector } from 'react-redux';
import ItemLoader from '../loader/ItemLoader';
import { addToCart } from '../../actions/cartActions';

export default function AddtoCart() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const productDetail = useSelector((state) => state.productDetails);
  const { error, Loading, product } = productDetail;

  const [quantity, setQuantity] = useState(1); 

  useEffect(() => {
    dispatch(DetailsProduct(id));
  }, [dispatch, id]);

  const handleIncrement = () => {
    if (quantity < product.countInStock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    dispatch(addToCart(id, quantity));
    navigate('/Cart'); 
}

  if (Loading) return <ItemLoader />;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Product Image Section */}
        <div className="col-md-6">
          <div className="product-image-container position-relative shadow-lg rounded">
            {product.offer && (
              <span className="offer-badge position-absolute badge bg-warning text-dark">
                Special Offer!
              </span>
            )}
            <img
              src={`http://127.0.0.1:8000${product.image}`}
              alt={product.productName}
              className="img-fluid product-image"
            />
          </div>
        </div>

        {/* Product Details Section */}
        <div className="col-md-6">
          <div className="product-details p-4">
            <h2 className="product-title mb-2">{product.productName}</h2>
            <h5 className="product-brand text-muted mb-3">{product.productBrand}</h5>
            <h4 className="product-price text-success">${product.price}</h4>

            <div className="mb-3">
              <Rating
                value={parseFloat(product.ratings)}
                text={`${product.numReviews} reviews`}
                color="#f8e825"
              />
            </div>

            <div className="product-status mb-3">
              <strong>Status:</strong> {product.countInStock > 0 ? (
                <span className="badge bg-success ms-2">In Stock</span>
              ) : (
                <span className="badge bg-danger ms-2">Out of Stock</span>
              )}
            </div>

            {/* Quantity Selector with Plus/Minus Buttons */}
            <div className="quantity-selector mb-3">
              <label htmlFor="quantity" className="form-label"><strong>Quantity:</strong></label>
              <div className="d-flex align-items-center">
                <button
                  className="btn btn-outline-secondary"
                  onClick={handleDecrement}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <input
                  type="text"
                  className="form-control text-center mx-2"
                  value={quantity}
                  readOnly
                  style={{ width: '50px' }}
                />
                <button
                  className="btn btn-outline-secondary"
                  onClick={handleIncrement}
                  disabled={quantity >= product.countInStock}
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="btn btn-primary mt-3 me-2 animated-button"
              disabled={product.countInStock === 0}
            >
              Add to Cart
            </button>
            <Link to="/products">
              <button className="btn btn-secondary mt-3 animated-button">🔙 Products</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
