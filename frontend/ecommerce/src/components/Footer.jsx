import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style/Footer.css'

const Footer = () => {
    return (
        <footer className="bg-dark text-light pt-5 pb-4">
            <Container>
                <Row>
                    {/* Contact Information */}
                    <Col md={3} sm={6} className="mb-4">
                        <h5>Contact Us</h5>
                        <ul className="list-unstyled">
                            <li>1234 Market Street</li>
                            <li>San Francisco, CA 94103</li>
                            <li>Phone: (123) 456-7890</li>
                            <li>Email: support@ecommerce.com</li>
                        </ul>
                    </Col>

                    {/* Customer Support Links */}
                    <Col md={3} sm={6} className="mb-4">
                        <h5>Customer Support</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/faq" className="text-light">FAQs</Link></li>
                            <li><Link to="/shipping" className="text-light">Shipping Policy</Link></li>
                            <li><Link to="/returns" className="text-light">Return Policy</Link></li>
                            <li><Link to="/support" className="text-light">Customer Support</Link></li>
                        </ul>
                    </Col>

                    {/* Policy Links */}
                    <Col md={3} sm={6} className="mb-4">
                        <h5>Company Policies</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/terms" className="text-light">Terms & Conditions</Link></li>
                            <li><Link to="/privacy" className="text-light">Privacy Policy</Link></li>
                            <li><Link to="/sitemap" className="text-light">Site Map</Link></li>
                        </ul>
                    </Col>

                    {/* Social Media Links */}
                    <Col md={3} sm={6} className="mb-4">
                        <h5>Follow Us</h5>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <a href="https://facebook.com" className="text-light" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook-f"></i> Facebook
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://twitter.com" className="text-light" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-twitter"></i> Twitter
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://instagram.com" className="text-light" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram"></i> Instagram
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://linkedin.com" className="text-light" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin"></i> LinkedIn
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center pt-3">
                        <p className="text-muted">&copy; {new Date().getFullYear()} eCommerce Website. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
