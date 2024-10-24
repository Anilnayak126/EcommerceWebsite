import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <div className="about-section py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Text Section */}
          <div className="col-lg-6">
            <h2 className="mb-4" style={{ color: '#343a40' }}>About Our E-Commerce Platform</h2>
            <p style={{ fontSize: '1.1rem', color: '#495057' }}>
              Welcome to our modern eCommerce platform! Our mission is to provide a seamless shopping 
              experience focusing on user convenience, security, and satisfaction. Whether you're shopping 
              for electronics, fashion, or everyday essentials, we offer a wide range of products for everyone.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#495057' }}>
              Powered by cutting-edge technologies such as <strong>React</strong>, <strong>Django Rest Framework</strong>, 
              and <strong>Bootstrap</strong>, our platform delivers fast, reliable performance with a sleek, modern interface. 
              Discover our product collections and enjoy a smooth, intuitive shopping journey.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#495057' }}>
              Stay connected with us on <strong>LinkedIn</strong> and <strong>GitHub</strong> for the latest updates and ongoing projects.
            </p>

            {/* LinkedIn and GitHub Buttons */}
            <div className="mt-4">
              <a
                href="https://www.linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary me-3"
                style={{ fontSize: '1rem' }}
              >
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark"
                style={{ fontSize: '1rem' }}
              >
                <i className="fab fa-github"></i> GitHub
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="col-lg-6 mt-4 mt-lg-0">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Ecommerce Project Visual"
              className="img-fluid rounded shadow"
              style={{ width: '100%' }}
            />
          </div>
        </div>

        {/* Key Features Section */}
        <div className="row mt-5">
          <div className="col text-center">
            <h3 className="mb-4" style={{ color: '#343a40' }}>Key Features</h3>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-4">
            <div className="feature-icon mb-3">
              <i className="fas fa-bolt fa-3x text-primary"></i>
            </div>
            <h5>Fast Performance</h5>
            <p>Experience lightning-fast browsing and shopping.</p>
          </div>
          <div className="col-md-4">
            <div className="feature-icon mb-3">
              <i className="fas fa-lock fa-3x text-primary"></i>
            </div>
            <h5>Secure Payments</h5>
            <p>Enjoy secure transactions and data protection.</p>
          </div>
          <div className="col-md-4">
            <div className="feature-icon mb-3">
              <i className="fas fa-tags fa-3x text-primary"></i>
            </div>
            <h5>Exclusive Offers</h5>
            <p>Get access to limited-time deals and discounts.</p>
          </div>
        </div>

        {/* Developed by Section */}
        <div className="row mt-5">
          <div className="col text-center">
            <p style={{ color: '#6c757d', fontSize: '1rem' }}>
              Developed by <strong>@AnilNayak</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
