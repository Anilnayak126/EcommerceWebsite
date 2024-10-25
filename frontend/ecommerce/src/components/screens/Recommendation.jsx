import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../actions/productsActions';

const RecommendedProducts = () => {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.productsList);
  const { error, Loading, products } = productsList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);


  const offerProducts = products.filter((product) => product.offer);

  return (
    <div className="container mt-4">
      <h2>Exclusive Offers</h2>
      <div className="row">
        {offerProducts.length > 0 ? (
          offerProducts.map((product) => (
            <div className="col-md-4" key={product._id}>
              <div className="card mb-4 position-relative">
                {/* Offer Icon */}
                <img
                  src="https://img.icons8.com/?size=100&id=XFuUHLsBR6Py&format=png&color=000000"
                  alt="Special Offer"
                  className="position-absolute"
                  style={{
                    top: '10px',
                    right: '10px',
                    width: '50px',
                    zIndex: '10',
                  }}
                />
                <img
                  src={`http://127.0.0.1:8000${product.image}`}
                  className="card-img-top"
                  alt={product.name}
                  style={{ objectFit: 'cover', height: '200px' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">${product.price}</p>
                  <button className="btn btn-primary">Add to Cart</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">
            <h5 className="text-center">No exclusive offers available at the moment.</h5>
          </div>
        )}
      </div>
      <div className="text-center mt-4">
        <Link to="/products" className="btn btn-secondary">
          View All Products
        </Link>
      </div>
    </div>
  );
};

export default RecommendedProducts;
