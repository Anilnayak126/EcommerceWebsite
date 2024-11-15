import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userActions';
import styled from '@emotion/styled';


const StyledNavLink = styled(Nav.Link)`
  color: #ffffff;
  font-weight: 500;
  font-size: 1.1rem;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #ffe600;
    transform: scale(1.1);
  }
`;

const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <Navbar
  sticky='top'
  bg="primary"
  expand="lg"
  className="px-3 py-3 shadow-sm navbar-hover-fix"
  variant="dark"
  style={{ background: 'linear-gradient(90deg, #0062E6, #33AEFF)' }}
>
      <div className="container-fluid">
        <LinkContainer to="/">
          <Navbar.Brand className="fw-bold fs-3 text-white">
            AnilzFashion
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <StyledNavLink>Home</StyledNavLink>
            </LinkContainer>
            <LinkContainer to="/Products">
              <StyledNavLink>Products</StyledNavLink>
            </LinkContainer>
            <LinkContainer to="/Cart">
              <StyledNavLink>Cart</StyledNavLink>
            </LinkContainer>
            <LinkContainer to="/About">
              <StyledNavLink>About</StyledNavLink>
            </LinkContainer>
            <LinkContainer to="/Contact">
              <StyledNavLink>Contact</StyledNavLink>
            </LinkContainer>
          </Nav>

          <div className="d-flex align-items-center">
            {userInfo ? (
              <>
                <span className="text-light fw-bold me-3">
                Welcome, {userInfo.name ? userInfo.name.toUpperCase() : userInfo.username.slice(0, userInfo.username.indexOf('@')).toUpperCase()|| "Guest"}
                </span>
                <Button
                  onClick={logoutHandler}
                  className="fw-bold me-2"
                  variant="danger"
                >
                  Log out
                </Button>
              </>
            ) : (
              <>
                <LinkContainer to="/Signup">
                  <Button variant="light" className="me-2 fw-bold">
                    Sign Up
                  </Button>
                </LinkContainer>
                <LinkContainer to="/Login">
                  <Button variant="light" className="fw-bold">
                    Log In
                  </Button>
                </LinkContainer>
              </>
            )}
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
