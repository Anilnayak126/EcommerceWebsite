import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rating from '../loader/Ratings';
import '../style/S_products.css'; // Custom styles for enhancements
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { DetailsProduct } from '../../actions/productsActions';
import { useDispatch, useSelector } from 'react-redux';
import ItemLoader from '../loader/ItemLoader';

export default function S_products() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.productDetails);
  const { error, Loading, product } = productDetail;

  useEffect(() => {
    dispatch(DetailsProduct(id));
  }, [dispatch, id]);

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
                color={"#f8e825"}
              />
            </div>

            <p className="product-description mb-4">
              <strong>Description:</strong> {product.productInfo}
            </p>

            <div className="product-status mb-3">
              <strong>Status:</strong> {product.countInStock > 0 ? (
                <span className="badge bg-success ms-2">In Stock</span>
              ) : (
                <span className="badge bg-danger ms-2">Out of Stock</span>
              )}
            </div>

            <button
              className="btn btn-primary mt-3 me-2 animated-button"
              disabled={product.countInStock === 0}
            >
              Add to Cart
            </button>
            <Link to="/products">
              <button className="btn btn-secondary mt-3 animated-button">Go Back</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
