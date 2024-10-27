import React from "react";
import '../style/carouselstyles.css'; 
import { images } from "../../data/Images";

export default function ProductCarousel() {
  return (
    <div 
      id="productCarousel" 
      className="carousel slide shadow-lg rounded overflow-hidden" 
      data-bs-ride="carousel" 
      data-bs-interval="3000"
    >
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={image.id}>
            <img 
              src={image.src}
              className="d-block w-100 full-screen-image" 
              alt={`Slide ${image.id}`} 
            />
            {/* Optional caption section for a more polished look */}
            <div className="carousel-caption d-none d-md-block">
              <h5>Professional Online Shopping</h5>
              <p>Discover the latest trends and exclusive offers!</p>
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
