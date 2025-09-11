import React from "react";

import { Link } from "react-router-dom";
import logo from "./assets/logo-removebg-preview.png";
import "./Footer.css"; // custom styles

const Footer = () => {
  return (
    <footer className="footer-section"data-aos="fade-right">
      
      <div className="container footer-content">
        {/* Left: Logo & About */}
        <div className="footer-about" data-aos="fade-right">
         <img src={logo} alt="YourCompany Logo" className="footer-logo" />
          <p>Jl. Yusuf Adiwinata No. 32-34, Kel. Gondangdia, Kec.
Menteng, Kota Administrasi Jakarta Pusat, Dearah khusus ibukota
Jakarta, 10350, Indonesia</p>
        </div>

        {/* Middle: Quick Links */}
        <div className="footer-links" data-aos="fade-right">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
                <div className="footer-links" data-aos="fade-right">
          <h4>Services</h4>
          <ul>
            <li><Link to="/services/web-development">Managed IT Services</Link></li>
            <li><Link to="/services/Services2">Cloud Services</Link></li>
            <li><Link to="/services/Services3">Cybersecurity</Link></li>
            <li><Link to="/services/Services4">IT Consulting</Link></li>
          </ul>
        </div>
                <div className="footer-links" data-aos="fade-right">
         
          <ul>
            <li><Link to="/services/Services5">Software Development</Link></li>
            <li><Link to="/services/Services6">Network Management</Link></li>
            <li><Link to="/services/Services7">Techincal Support</Link></li>
            <li><Link to="/services/Services8">Data Backup And Recovery</Link></li>
            <li><Link to="/services/Services9">System Integration</Link></li>
          </ul>
        </div>

        {/* Right: Contact Info */}
        <div className="footer-contact" data-aos="fade-right">
          <h4>Contact</h4>
          <p>Email: support@yourcompany.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Hyderabad, India</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom" data-aos="fade-right">
        <p>© {new Date().getFullYear()} YourCompany. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
