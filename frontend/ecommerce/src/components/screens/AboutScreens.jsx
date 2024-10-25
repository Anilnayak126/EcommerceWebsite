import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaLinkedin, FaGithub, FaBolt, FaLock, FaTags } from 'react-icons/fa';
import { AboutImage } from '../../data/Images';



const About = () => {
  return (
    <div className="about-section py-5" style={{ backgroundColor: '#fff5f8' }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Text Section */}
          <div className="col-lg-6">
            <h2 className="mb-4" style={{ color: '#333' }}>About Our Fashion Marketplace</h2>
            <p style={{ fontSize: '1.15rem', color: '#555' }}>
              Welcome to our professional online shopping app, where style meets convenience! 
              Our platform is dedicated to bringing you the latest in fashion trends, offering 
              an unparalleled shopping experience. Whether you're seeking casual wear, formal attire, 
              or exclusive designer pieces, we've got it all.
            </p>
            <p style={{ fontSize: '1.15rem', color: '#555' }}>
              With technology-driven enhancements using <strong>React</strong>, 
              <strong> Django Rest Framework</strong>, and <strong>Bootstrap</strong>, our site is 
              optimized for smooth navigation, fast performance, and a luxurious shopping experience. 
              Shop with confidence, knowing your data is secure and your satisfaction is our priority.
            </p>
            <p style={{ fontSize: '1.15rem', color: '#555' }}>
              Connect with us on <strong>LinkedIn</strong> and <strong>GitHub</strong> for insights 
              into our latest collections and projects.
            </p>

            {/* LinkedIn and GitHub Buttons */}
            <div className="mt-4">
              <a
                href="https://www.linkedin.com/in/anil-kumar-nayak"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-danger me-3"
                style={{ fontSize: '1rem' }}
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href="https://github.com/anil-kumar-nayak"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-dark"
                style={{ fontSize: '1rem' }}
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="col-lg-6 mt-4 mt-lg-0">
            <img
              src={AboutImage.link}
              alt="Fashion Showcase"
              className="img-fluid rounded shadow"
              style={{ width: '100%', borderRadius: '12px' }}
            />
          </div>
        </div>

        {/* Key Features Section */}
        <div className="row mt-5">
          <div className="col text-center">
            <h3 className="mb-4" style={{ color: '#333' }}>Key Features</h3>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-4">
            <div className="feature-icon mb-3">
              <FaBolt className="text-danger" size={48} />
            </div>
            <h5>Fast & Smooth Shopping</h5>
            <p>Enjoy a seamless shopping experience at high speeds.</p>
          </div>
          <div className="col-md-4">
            <div className="feature-icon mb-3">
              <FaLock className="text-danger" size={48} />
            </div>
            <h5>Secure Transactions</h5>
            <p>Shop with confidence knowing your data is protected.</p>
          </div>
          <div className="col-md-4">
            <div className="feature-icon mb-3">
              <FaTags className="text-danger" size={48} />
            </div>
            <h5>Exclusive Fashion Deals</h5>
            <p>Access to the best deals on top-notch fashion items.</p>
          </div>
        </div>

        {/* Developed by Section */}
        <div className="row mt-5">
          <div className="col text-center">
            <p style={{ color: '#888', fontSize: '1rem' }}>
              Developed with ❤️ by <strong>@AnilKumarNayak</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
