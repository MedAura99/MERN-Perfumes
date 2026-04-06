import React from "react";
import "./footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        {/* Contact Info */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p><FaEnvelope /> Email: <a href="mailto:alamgeer@perfume.com">alamgeer@perfume.com</a></p>
          <p><FaPhone /> Phone: +92 300 1234567</p>
          <p><FaWhatsapp /> WhatsApp: +92 300 1234567</p>
          <div className="footer-social">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Perfume List</a></li>
            <li><a href="#">Complain</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2026 Alamgeer Perfumes. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
