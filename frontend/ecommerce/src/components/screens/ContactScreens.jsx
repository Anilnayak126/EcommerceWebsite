import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEnvelope, FaUser, FaPaperPlane, FaPhone } from 'react-icons/fa';
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
    <div className="contact-body p-5" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <Row className="justify-content-center text-center mb-4">
        <Col md={8}>
         
          <h3 className=" text-primary">We're here to elevate your shopping experience!</h3>
        </Col>
      </Row>
      <Row className="justify-content-center mb-5">
        <Col md={8}>
          <div className="about-me mb-4">
            <h3>About Me</h3>
            <p>
              I am a passionate designer and developer with a keen eye for aesthetics and functionality. 
              My goal is to create seamless user experiences that not only look great but also serve 
              their purpose effectively. Whether it's styling advice or technical support, I am here to help!
            </p>
          </div>
        </Col>
      </Row>

      {/* Contact Options */}
      <Row className="justify-content-center mb-5">
        <Col md={4} className="text-center mb-4">
          <div className="contact-option p-3 border rounded shadow-sm">
            <FaPhone size={40} className="text-primary mb-2" />
            <h5>Call Us</h5>
            <p>(123) 456-7890</p>
            <Button variant="primary" className="fancy-button" onClick={() => alert('Calling...')}>
              Call Now
            </Button>
          </div>
        </Col>
        <Col md={4} className="text-center mb-4">
          <div className="contact-option p-3 border rounded shadow-sm">
            <FaEnvelope size={40} className="text-primary mb-2" />
            <h5>Email Us</h5>
            <p>support@example.com</p>
            <Button variant="primary" className="fancy-button" onClick={() => alert('Emailing...')}>
              Send Email
            </Button>
          </div>
        </Col>
      </Row>

      {/* Message Form */}
      <Row className="justify-content-center">
        <Col md={8}>
          <Form className="p-4 rounded shadow" style={{ backgroundColor: '#ffffff' }}>
            <Form.Group controlId="formBasicName" className="mb-4">
              <Form.Label>
                <FaUser className="me-2 text-muted" /> Full Name
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="E.g., Jane Doe"
                required
                className="animated-input"
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
                className="animated-input"
              />
            </Form.Group>

            <Form.Group controlId="formBasicSubject" className="mb-4">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                placeholder="E.g., Order Inquiry, Fashion Tips"
                required
                className="animated-input"
              />
            </Form.Group>

            <Form.Group controlId="formBasicMessage" className="mb-4">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Type your message here..."
                required
                className="animated-input"
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3 btn-lg">
              <FaPaperPlane className="me-2" /> Send Message
            </Button>
          </Form>
          <p className="mt-4 text-muted">
            We typically respond within 24 hours. For urgent inquiries, contact us at (123) 456-7890.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center text-center">
        <Col md={8}>
          <h5>Follow Us</h5>
          <p>Stay connected and get the latest updates by following us on social media!</p>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
