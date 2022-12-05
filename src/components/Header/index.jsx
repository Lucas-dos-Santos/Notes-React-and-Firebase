import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import UserGlobalContext from '../../context/user/context';
import LogoImage from '../../assets/images/logo.png';
import './styles.scss';

function Header() {
  const { state } = useContext(UserGlobalContext);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand">
          <img
            src={LogoImage}
            alt="brand-logo"
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/register" className="nav-link">Register</Link>
            <Link to="/login" className="btn btn-outline-dark">Login</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;