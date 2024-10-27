// src/components/loader/ProductSkeletonLoader.js
import React from 'react';
import '../style/skeleton.css' // You may need to create this CSS file for styling

const ProductSkeletonLoader = () => {
    return (
        <div className="row">
            {[...Array(4)].map((_, index) => (
                <div className="col-md-4 col-sm-6 mb-4" key={index}>
                    <div className="card h-100 skeleton-card">
                        <div className="skeleton-image"></div>
                        <div className="card-body">
                            <div className="skeleton-title"></div>
                            <div className="skeleton-subtitle"></div>
                            <div className="skeleton-price"></div>
                            <div className="skeleton-rating"></div>
                            <div className="skeleton-stock"></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductSkeletonLoader;
