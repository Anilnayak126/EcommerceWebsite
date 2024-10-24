// Rating.jsx
import React from 'react';

const Rating = ({ value, text, color }) => {
  return (
    <div className="rating" style={{ display: 'flex', alignItems: 'center' }}>
      <span style={{ color }}>
        {[...Array(5)].map((_, index) => (
          <span key={index}>
            {value >= index + 1 ? (
              <i className="fas fa-star"></i>
            ) : value >= index + 0.5 ? (
              <i className="fas fa-star-half-alt"></i>
            ) : (
              <i className="far fa-star"></i>
            )}
          </span>
        ))}
      </span>
      <span className="ms-2" style={{ color: '#6c757d' }}>
        {text}
      </span>
    </div>
  );
};

export default Rating;
