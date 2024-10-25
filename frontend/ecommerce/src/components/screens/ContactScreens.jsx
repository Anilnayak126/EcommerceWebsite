import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEnvelope, FaUser, FaPaperPlane } from 'react-icons/fa';
import '../style/Contact.css'; // Custom CSS file for styling

const Contact = () => {
  const [typingText, setTypingText] = useState("");
  const welcomeMessage = "Need styling advice? Reach out to us!";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setTypingText((prev) => prev + welcomeMessage[index]);
      index++;
      if (index === welcomeMessage.length) {
        clearInterval(typingInterval);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <Container className="contact-container my-5 p-5 rounded shadow-lg">
      <Row className="justify-content-center text-center">
        <Col md={6}>
          <h2 className="mb-4 typing-text">{typingText}</h2>
          <p className="lead">We're here to elevate your shopping experience!</p>
          <img
            src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3Mzl8MHwxfGFsbHwxfHx8fHx8fHwxNjEzNTM4ODk3&ixlib=rb-1.2.1&q=80&w=600"
            alt="Fashion Contact"
            className="img-fluid mb-4 rounded shadow-sm"
            style={{ borderRadius: '10px', maxHeight: '300px', objectFit: 'cover' }}
          />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={8}>
          <Form className="p-4 rounded shadow form-bg">
            <Form.Group controlId="formBasicName" className="mb-4">
              <Form.Label>
                <FaUser className="me-2 text-muted" /> Full Name
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="E.g., Jane Doe"
                required
                className="shadow-sm stylish-input"
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail" className="mb-4">
              <Form.Label>
                <FaEnvelope className="me-2 text-muted" /> Email Address
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="E.g., jane@example.com"
                required
                className="shadow-sm stylish-input"
              />
            </Form.Group>

            <Form.Group controlId="formBasicSubject" className="mb-4">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                placeholder="E.g., Order Inquiry, Fashion Tips"
                required
                className="shadow-sm stylish-input"
              />
            </Form.Group>

            <Form.Group controlId="formBasicMessage" className="mb-4">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Type your message here..."
                required
                className="shadow-sm stylish-input"
              />
            </Form.Group>

            <Button variant="dark" type="submit" className="mt-3 btn-lg stylish-button shadow-sm">
              <FaPaperPlane className="me-2" /> Send Message
            </Button>
          </Form>
          <p className="mt-4 text-muted">
            We typically respond within 24 hours. For urgent inquiries, contact us at (123) 456-7890.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
