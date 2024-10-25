import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Button } from 'react-bootstrap';

export default function Headers() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="px-3">
      <div className="container-fluid">
        <LinkContainer to="/">
          <Navbar.Brand className="fw-bold">AnilzFashion</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbarColor02" />
        <Navbar.Collapse id="navbarColor02">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link className="d-flex align-items-center ms-3 mx-3">
                Home <i className="fa fa-home ms-1" aria-hidden="true"></i>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Cart">
              <Nav.Link className="d-flex align-items-center mx-3">
                Cart <i className="fa fa-shopping-cart ms-1" aria-hidden="true"></i>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Products">
              <Nav.Link className="d-flex align-items-center mx-3">
                Products <i className="fa fa-tags ms-1" aria-hidden="true"></i>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link className="d-flex align-items-center mx-3">
                About <i className="fa fa-info-circle ms-1" aria-hidden="true"></i>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Contact">
              <Nav.Link className="d-flex align-items-center mx-3">
                Contact<i class="fa-solid fa-phone ms-1" aria-hidden="true"></i>
              </Nav.Link>
            </LinkContainer>
          </Nav>

          {/* Sign Up and Logout Buttons */}
          <div className="d-flex align-items-center">
            <LinkContainer to="/Signup">
              <Button variant="light"  className="me-2 fw-bold">Sign Up</Button>
            </LinkContainer>
            <LinkContainer to="/">
              <Button  className=" btn btn-danger fw-bold p-1.9 ">Logout</Button>
            </LinkContainer>
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
