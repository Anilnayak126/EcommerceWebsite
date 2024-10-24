import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import '../style/carouselstyles.css'; // Include custom CSS styles
import { listProducts } from "../../actions/productsActions";
import {useDispatch,useSelector} from 'react-redux'

export default function ProductCarousel() {
  // const [products, setProducts] = useState([]);
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productsList)
  const {error,Loading,products} = productList

  useEffect(() => {

    dispatch(listProducts())
    
  }, [dispatch]);

  return (
    <div 
      id="productCarousel" 
      className="carousel slide shadow-lg rounded" 
      data-bs-ride="carousel" 
      data-bs-interval="3000"
    >
      <div className="carousel-inner">
        {products.map((product, index) => (
          <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={product._id}>
            <img 
              src={`http://127.0.0.1:8000${product.image}`} 
              className="d-block w-100 full-screen-image" 
              alt={product.productName} 
            />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-3 rounded">
              <h5 className="text-light">{product.productName}</h5>
              <p className="text-light">{product.productBrand}</p>
              <p className="text-light fw-bold">Price: ${product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
