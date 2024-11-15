import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../style/Benefits.css'

const Benefits = () => {
    return (
        <section className="benefits-section py-5">
            <Container>
                <Row>
                    {/* Free Shipping */}
                    <Col md={3} sm={6} className="text-center mb-4">
                        <div className="benefit-icon">
                            <i className="fas fa-shipping-fast fa-2x"></i>
                        </div>
                        <h5 className="mt-3">Free Shipping</h5>
                        <p>Enjoy free shipping on all orders above $50.</p>
                    </Col>

                    {/* Easy Returns */}
                    <Col md={3} sm={6} className="text-center mb-4">
                        <div className="benefit-icon">
                            <i className="fas fa-undo fa-2x"></i>
                        </div>
                        <h5 className="mt-3">Easy Returns</h5>
                        <p>Hassle-free returns within 30 days.</p>
                    </Col>

                    {/* Customer Support */}
                    <Col md={3} sm={6} className="text-center mb-4">
                        <div className="benefit-icon">
                            <i className="fas fa-headset fa-2x"></i>
                        </div>
                        <h5 className="mt-3">24/7 Support</h5>
                        <p>Our support team is here to help you anytime.</p>
                    </Col>

                    {/* Secure Payments */}
                    <Col md={3} sm={6} className="text-center mb-4">
                        <div className="benefit-icon">
                            <i className="fas fa-lock fa-2x"></i>
                        </div>
                        <h5 className="mt-3">Secure Payments</h5>
                        <p>We offer safe and encrypted payment options.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Benefits;
