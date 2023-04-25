import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './../../components/logo.png';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';

import { userLogout } from '../../api/userApi';
function Header() {
const navigate = useNavigate();
  
const logMeOut = () => {
  sessionStorage.removeItem('accessJWT');
  localStorage.removeItem('crmSite');
  userLogout();
  navigate('/');
};
  
  
  //hello world 

  return (
    <Navbar collapseOnSelect bg="info" variant="dark " expand="md">
      <Navbar.Brand>
        <img src={logo} alt=" " width="50px" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <LinkContainer to="/dashboard">
            <Nav.Link>Dashboard</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/tickets">
            <Nav.Link>Tickets</Nav.Link>
          </LinkContainer>
          <LinkContainer  to="/">
            <Nav.Link onClick={logMeOut}>Logout</Nav.Link>
          </LinkContainer>

          {/* <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          <Nav.Link href="/dashboard">Tickets</Nav.Link>
          <Nav.Link href="/dashboard">Logout</Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
