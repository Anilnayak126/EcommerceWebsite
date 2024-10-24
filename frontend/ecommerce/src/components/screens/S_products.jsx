import React, { useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Rating from '../loader/Ratings'; 
import '../style/S_products.css'; 
import { Link } from 'react-router-dom';

import { useParams } from 'react-router';
import { DetailsProduct } from '../../actions/productsActions';
import {useDispatch,useSelector} from 'react-redux'
import ItemLoader from '../loader/ItemLoader';



export default function S_products() {

  const { id } = useParams();
  const Dispatch =useDispatch()
  const productdeatil = useSelector((state) => state.productDetails)
  const {error,Loading,product} = productdeatil;

  useEffect(() => {
    Dispatch(DetailsProduct(id))
  }, [Dispatch]);

  if (Loading)return <ItemLoader/>;
  if (error) return   <Alert variant='danger'>
  {error}
</Alert>;


  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img 
            src={`http://127.0.0.1:8000${product.image}`} 
            alt={product.productName} 
            className="img-fluid product-image" 
          />
        </div>
        <div className="col-md-6">
          <h2>{product.productName}</h2>
          <h5 className="text-muted">{product.productBrand}</h5>
          <p><strong>Price: ${product.price}</strong></p>
          <div>
            <Rating 
              value={parseFloat(product.ratings)}
              text={`${product.numReviews} reviews`}
              color={"#f8e825"}
            />
          </div>
          <p><strong>Description:</strong></p>
          <p>{product.productInfo}</p>
          <div><strong>Status:</strong> {product.countInStock > 0 ?<p className='text-success'>In Stock</p> : <p className='text-danger'>Out Of Stock</p> }</div>
          <button className="btn btn-success " disabled={product.countInStock == 0}>Add to Cart</button>
          <Link to="/products">
          <button className="btn btn-danger ms-2">Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
