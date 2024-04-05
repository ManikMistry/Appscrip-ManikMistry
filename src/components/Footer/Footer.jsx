import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
    <div className='top-footer'>
      <div className="left-section">
        <h4>Be the first to know</h4>
        <p className="small-text">Sign up for details</p>
        <div className="subscribe">
          <input type="email" placeholder="Enter your email" className="email-input" />
          <button className="subscribe-btn">Subscribe</button>
        </div>
      </div>
      <div className="right-section">
        <h4>Contact us</h4>
        <p>Number: +123456789</p>
        <p>Email: example@example.com</p>
      </div>
      </div>
      <div className='sub-footer'>
        <div>
          <h1>metta muse</h1>
          <p>About Us</p>
          <p>Stores</p>
          <p>Contact Us</p>
          <p>EU Compliances</p>
        </div>
        <div>
        <h1>QUICK LINKS</h1>
          <p>Ordr and Shopping</p>
          <p>Join/Login as Seller</p>
          <p>Payment & Pricing</p>
          <p>FAQs</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
        <div>
        <h1>FOLLOW US</h1>
          <p>Facebook</p>
          <p>Twitter</p>
        </div>
      </div>
      <div className='bottom-text'>
        <p>Copyright@2024. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
