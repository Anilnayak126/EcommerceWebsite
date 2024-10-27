import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaLinkedin, FaGithub, FaBolt, FaLock, FaTags } from 'react-icons/fa';
import { AboutImage } from '../../data/Images';
import '../style/About.css';

const About = () => {
  return (
    <div className="about-section">
      <div className="container">
        {/* Top Section - Header */}
        <div className="about-header text-center mb-5">
          <h2 className="about-title">About Our Fashion Marketplace</h2>
          <p className="about-subtitle">Your destination for exclusive fashion, with cutting-edge tech and top security.</p>
        </div>

        <div className="row align-items-center">
          {/* Text Section */}
          <div className="col-lg-6 about-text-section">
            <p className="about-description">
              Welcome to our professional online shopping app, where style meets convenience!
              Our platform is dedicated to bringing you the latest in fashion trends, offering 
              an unparalleled shopping experience.
            </p>
            <p className="about-description">
              With tech enhancements using <strong>React</strong>, <strong>Django Rest Framework</strong>, 
              and <strong>Bootstrap</strong>, our site is optimized for a fast, luxurious shopping journey.
            </p>
            <p className="about-description">
              Connect with us on <strong>LinkedIn</strong> and <strong>GitHub</strong> to explore our latest collections and tech projects.
            </p>

            {/* LinkedIn and GitHub Buttons */}
            <div className="mt-4">
              <a
                href="https://www.linkedin.com/in/anil-kumar-nayak"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-danger me-3 about-btn"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href="https://github.com/anil-kumar-nayak"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-dark about-btn"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="col-lg-6 mt-4 mt-lg-0 about-image-section">
            <img
              src={AboutImage.link}
              alt="Fashion Showcase"
              className="about-image img-fluid shadow"
            />
          </div>
        </div>

        {/* Key Features Section */}
        <div className="row mt-5 text-center">
          <div className="col">
            <h3 className="key-features-title">Key Features</h3>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-4 feature">
            <div className="feature-icon mb-3">
              <FaBolt className="icon" />
            </div>
            <h5>Fast & Smooth Shopping</h5>
            <p>Enjoy a seamless shopping experience at high speeds.</p>
          </div>
          <div className="col-md-4 feature">
            <div className="feature-icon mb-3">
              <FaLock className="icon" />
            </div>
            <h5>Secure Transactions</h5>
            <p>Shop with confidence knowing your data is protected.</p>
          </div>
          <div className="col-md-4 feature">
            <div className="feature-icon mb-3">
              <FaTags className="icon" />
            </div>
            <h5>Exclusive Fashion Deals</h5>
            <p>Access to the best deals on top-notch fashion items.</p>
          </div>
        </div>

        {/* Developed by Section */}
        <div className="row mt-5 text-center">
          <div className="col">
            <p className="developed-by">
              Developed with ❤️ by <strong>@AnilKumarNayak</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
