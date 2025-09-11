import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./CustomNavbar.css";
import logo from "./assets/logo-removebg-preview.png"; // company logo

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [color, setColor] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 70) {
        setColor(true);
      } else {
        setColor(false);
      }
    };

    window.addEventListener('scroll', changeColor);
    changeColor(); // initial check
    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, []); 

  return (
   <Navbar
  expand="lg"
  fixed="top"
  className={`custom-navbar ${color ? "navbar-bg" : ""}`}
  variant="dark"
  expanded={expanded}
  onToggle={() => setExpanded(!expanded)}
>
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="navbar-brand">
          {/* Your Brand Logo / Text */}
          <img src={logo} alt="YourCompany Logo" className="nav-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={NavLink}
              to="/"
              end
              className="nav-link-text"
              onClick={() => setExpanded(false)}
            >
              HOME
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/about"
              className="nav-link-text"
              onClick={() => setExpanded(false)}
            >
              ABOUT US
            </Nav.Link>

            {/* Services Dropdown */}
            <NavDropdown
  title="SERVICES"
  id="services-dropdown"
  className="nav-link-text"
>
  <NavDropdown.Item
    as={NavLink}
    to="/services/web-development"
    onClick={() => setExpanded(false)}
  >
    Managed IT
  </NavDropdown.Item>
  <NavDropdown.Item
    as={NavLink}
    to="/services/Services2"
    onClick={() => setExpanded(false)}
  >
    Cloud Solutions
  </NavDropdown.Item>
  <NavDropdown.Item
    as={NavLink}
    to="/services/Services3"
    onClick={() => setExpanded(false)}
  >
    Cybersecurity
  </NavDropdown.Item>
  <NavDropdown.Item
    as={NavLink}
    to="/services/Services4"
    onClick={() => setExpanded(false)}
  >
    IT Consulting
  </NavDropdown.Item>
  <NavDropdown.Item
    as={NavLink}
    to="/services/Services5"
    onClick={() => setExpanded(false)}
  >
    Software Development
  </NavDropdown.Item>
  <NavDropdown.Item
    as={NavLink}
    to="/services/Services6"
    onClick={() => setExpanded(false)}
  >
    Network Management
  </NavDropdown.Item>
  <NavDropdown.Item
    as={NavLink}
    to="/services/Services7"
    onClick={() => setExpanded(false)}
  >
    Technical Support
  </NavDropdown.Item>
  <NavDropdown.Item
    as={NavLink}
    to="/services/Services8"
    onClick={() => setExpanded(false)}
  >
    Data Backup & Recovery  
  </NavDropdown.Item>
  <NavDropdown.Item
    as={NavLink}
    to="/services/Services9"
    onClick={() => setExpanded(false)}
  >
    System Integration
  </NavDropdown.Item>
</NavDropdown>


            <Nav.Link
              as={NavLink}
              to="/contact"
              className="nav-link-text"
              onClick={() => setExpanded(false)}
            >
              CONTACT US
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
