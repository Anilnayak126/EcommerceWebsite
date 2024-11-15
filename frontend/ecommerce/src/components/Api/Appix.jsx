import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { listProducts } from "../../actions/productsActions";
import { addToCart } from "../../actions/cartActions";
import ProductSkeletonLoader from '../loader/ProductSkeletonLoader'; 
import Rating from '../loader/Ratings';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/crards.css';
import Pagination from "../screens/Pagination";



const ProductListScreen = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const productsList = useSelector((state) => state.productsList);
    const { error, Loading, products } = productsList;
    const productList = products.results || [];
    
    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 3; 

    useEffect(() => {
        dispatch(listProducts(currentPage, pageSize));
    }, [dispatch, currentPage]);


    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    if (Loading) return <ProductSkeletonLoader />; 
    if (error) return <div className="alert alert-danger">Error: {error}</div>;

    const totalCount = products?.count || 0;
    const totalPages = Math.ceil(totalCount / pageSize);

    return (
        <div className="container">
            <h1 className="text-center mb-4">Products</h1>
            <div className="row">
                {productList.map((product) => (
                    <div className="col-md-4 col-sm-6 mb-4" key={product._id}>
                        <div className="card h-100 position-relative overflow-hidden">
                            {product.offer && (
                               <img 
                                    src="https://img.icons8.com/?size=100&id=XFuUHLsBR6Py&format=png&color=000000" 
                                    alt="Offer Icon" 
                                    className="offer-icon position-absolute" 
                                />
                            )}
                            <div className="card-img-wrapper">
                                <img 
                                    src={`http://127.0.0.1:8000${product.image}`} 
                                    alt={product.productName} 
                                    className="card-img-top img-fluid " 
                                    loading="lazy"
                                />
                            </div>
                            <div className="card-body d-flex flex-column">
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
                                <p className="card-text">
                                    <small className="text-muted">
                                        {product.countInStock > 0 ? `In Stock: ${product.countInStock}` : "Out of Stock"}
                                    </small>
                                </p>
                                <div className="mt-auto d-grid gap-2">
                                    <Link to= {`/Addcart/${product._id}`}>
                                    <button className={`btn ${product.countInStock === 0 ? "btn-danger" : "btn-primary " } w-100` }>
                                        {product.countInStock === 0 ? "Out Of Stock" : "Add to Cart"}
                                    </button>
                                    </Link>
                                    <Link to={`/product/${product._id}`}>
                                        <button className="btn btn-info w-100">View Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Pagination 
                currentPage={currentPage} 
                totalPages={totalPages} 
                onPageChange={handlePageChange} 
            />
        </div>
    );
};

export default ProductListScreen;
