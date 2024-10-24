import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';

export default function Headers() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <LinkContainer to="/">
            <Nav.Link className="navbar-brand">AnilzFashion</Nav.Link>
          </LinkContainer>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <LinkContainer to="/">
                  <Nav.Link className="nav-link active">Home <i className="fa fa-home" aria-hidden="true"></i></Nav.Link>
                </LinkContainer>
              </li>
              <li className="nav-item">
                <LinkContainer to="/Cart">
                  <Nav.Link className="nav-link">Cart</Nav.Link>
                </LinkContainer>
              </li>
              <li className="nav-item">
                <LinkContainer to="/Products">
                  <Nav.Link className="nav-link">Products</Nav.Link>
                </LinkContainer>
              </li>
              <li className="nav-item">
                <LinkContainer to="/about">
                  <Nav.Link className="nav-link">About</Nav.Link>
                </LinkContainer>
              </li>
              <li className="nav-item dropdown">
                <Nav.Link
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  NewUser?
                </Nav.Link>
                <div className="dropdown-menu">
                  <LinkContainer to="/Signup">
                    <Nav.Link className="dropdown-item">SignUp</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/Login">
                    <Nav.Link className="dropdown-item">Login</Nav.Link>
                  </LinkContainer>
                  <div className="dropdown-divider"></div>
                  <LinkContainer to="/separated-link">
                    <Nav.Link className="dropdown-item">LogOut</Nav.Link>
                  </LinkContainer>
                </div>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-sm-2" type="search" placeholder="Search" />
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
