import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEnvelope, FaUser, FaPaperPlane } from 'react-icons/fa'; // Importing icons

const Contact = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center text-center">
        <Col md={6}>
          <h2 className="mb-4">Contact Us</h2>
          <p>If you have any questions, feel free to reach out to us!</p>
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c524d1d245b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3Mzl8MHwxfGFsbHwxfHx8fHx8fHwxNjEzNTM4ODk3&ixlib=rb-1.2.1&q=80&w=600" 
            alt="Contact" 
            className="img-fluid mb-4" 
            style={{ borderRadius: '10px', maxHeight: '300px', objectFit: 'cover' }} 
          />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={8}>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>
                <FaUser className="me-2" /> Full Name
              </Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter your name" 
                required 
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>
                <FaEnvelope className="me-2" /> Email Address
              </Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Enter your email" 
                required 
              />
            </Form.Group>

            <Form.Group controlId="formBasicSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="e.g., Order Status, Product Inquiry" 
                required 
              />
            </Form.Group>

            <Form.Group controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={5} 
                placeholder="Your message" 
                required 
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              <FaPaperPlane className="me-2" /> Send Message
            </Button>
          </Form>
          <p className="mt-4 text-muted">
            Our team usually responds within 24 hours. If your inquiry is urgent, please call us directly at (123) 456-7890.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
