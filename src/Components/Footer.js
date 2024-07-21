// src/components/Footer.js
import React from 'react';
import './footer.css'; // Make sure to create a corresponding CSS file

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>About Us</h4>
                    <p>Company information and details.</p>
                </div>
                <div className="footer-section">
                    <h4>Contact</h4>
                    <p>Email: contact@blinkitlike.com</p>
                    <p>Phone: +123 456 7890</p>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <p>Social media links.</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Blinkit Like. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
