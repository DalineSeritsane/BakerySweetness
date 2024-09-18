import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import '../styles/Footer.css';
import Logo from '../Images/logo.jpg';

function Footer(){
    return (
      <div className="footer" id="footer">
        <div className="footer-content">
          <div className="footer-content-left">
            <img className='footer-logo' src={Logo} alt="" />
            <p className='footer-text'>Explore our finest desserts, bread, and cakes with a soft touch of love, providing your taste buds with mouthwatering flavors. We use the best ingredients to give you a fresh taste of heaven in your soul.</p>
          </div>
          <div className="footer-content-center">
            <h2>BakerySweetness</h2>
            <ul>
                <li><Link to="/">Home</Link></li> {/* Add Link for routing */}
                <li><Link to="/about">About</Link></li> {/* Add Link for routing */}
                <li><Link to="/menu">Menu</Link></li> {/* Add Link for routing */}
            </ul>
          </div>
          <div className="footer-content-right">
            <h2>Get in Touch</h2>
            <ul>
              <li>+27 625 589 856</li>
              <li>bakerysweetness@gmail.com</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 bakerysweetness.com - All Rights Reserved</p>
      </div>
    );
}

export default Footer;
