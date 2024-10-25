import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { listProducts } from "../../actions/productsActions";
import ItemLoader from '../loader/ItemLoader';
import Rating from '../loader/Ratings';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/crards.css'; 

export default function Appix() {
    const dispatch = useDispatch();
    const productsList = useSelector((state) => state.productsList);
    const { error, loading, products } = productsList;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    if (loading) return <ItemLoader />;
    if (error) return <div className="alert alert-danger">Error: {error}</div>;

    return (
        <div className="container">
            <h1 className="text-center mb-4">Products</h1>
            <div className="row">
                {products.map((product) => (
                    <div className="col-md-4 mb-4" key={product._id}>
                        <div className="card modern-card position-relative">
                            {product.offer && (
                                <img 
                                    src="https://img.icons8.com/?size=100&id=XFuUHLsBR6Py&format=png&color=000000" 
                                    alt="Offer Icon" 
                                    className="offer-icon" 
                                />
                            )}
                            <img 
                                src={`http://127.0.0.1:8000${product.image}`} 
                                alt={product.productName} 
                                className="card-img-top img-fluid product-image" 
                                loading="lazy"
                            />
                            <div className="card-body">
                                <h5 className="card-title">{product.productName}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{product.productBrand}</h6>
                                <p className="card-text"><strong>Price: ${product.price}</strong></p>
                                <div className="card-text">
                                    <Rating 
                                        value={product.ratings}
                                        text={`${product.numReviews} reviews`}
                                        color={"#f8e825"}
                                    />
                                </div>
                                <p className="card-text"><small className="text-muted">In Stock: {product.countInStock}</small></p>
                                <button className="btn btn-primary">Add to Cart</button>
                                <Link to={`/product/${product._id}`}>
                                    <button className="btn btn-info float-end">View Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
