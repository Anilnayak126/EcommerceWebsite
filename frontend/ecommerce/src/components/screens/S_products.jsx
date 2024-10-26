import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rating from '../loader/Ratings'; 
import '../style/S_products.css'; 
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
    <div className="container mt-5">
      <div className="card shadow-lg border-0">
        <div className="row g-0">
          <div className="col-md-6 position-relative">
            {/* Offer Icon */}
            {product.offer && (
              <>
          
                <span className="offer-badge position-absolute">Special Offer!</span>
              </>
            )}
            <img
              src={`http://127.0.0.1:8000${product.image}`}
              alt={product.productName}
              className="img-fluid rounded product-image"
            />
          </div>

          <div className="col-md-6">
            <div className="card-body">
              <h2 className="card-title text-primary">{product.productName}</h2>
              <h5 className="card-subtitle mb-3 text-muted">{product.productBrand}</h5>
              <h4 className="text-success">${product.price}</h4>

              {/* Ratings Component */}
              <div>
                <Rating
                  value={parseFloat(product.ratings)}
                  text={`${product.numReviews} reviews`}
                  color={"#f8e825"}
                />
              </div>

              <p className="card-text mt-3">
                <strong>Description:</strong> {product.productInfo}
              </p>

              {/* Stock and Status Section */}
              <div className="mb-3">
                <strong>Status:</strong> {product.countInStock > 0 ? (
                  <span className="badge bg-success ms-2">In Stock</span>
                ) : (
                  <span className="badge bg-danger ms-2">Out of Stock</span>
                )}
              </div>

              {/* Action Buttons */}
              <button className="btn btn-primary mt-3 me-2" disabled={product.countInStock === 0}>Add to Cart</button>
              <Link to="/products">
                <button className="btn btn-secondary mt-3">Go Back</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
