import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-container m-5 ">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-md-2">
            <h6 className="footer-heading">Information</h6>
            <ul className="footer-links list-unstyled">
              <li><a href="/">Search</a></li>
              <li><a href="/">Help</a></li>
              <li><a href="/">Shipping Details</a></li>
              <li><a href="/">Privacy Policy</a></li>
              <li><a href="/">Information</a></li>
            </ul>
          </div>
          <div className="col-md-2">
            <h6 className="footer-heading">My Account</h6>
            <ul className="footer-links list-unstyled">
              <li><a href="/">Contact Us</a></li>
              <li><a href="/">About Us</a></li>
              <li><a href="/">Careers</a></li>
              <li><a href="/">Return Centre</a></li>
              <li><a href="/">Deliveries</a></li>
            </ul>
          </div>
          <div className="col-md-2">
            <h6 className="footer-heading">Help</h6>
            <ul className="footer-links list-unstyled">
              <li><a href="/">Search Terms</a></li>
              <li><a href="/">Advanced Search</a></li>
              <li><a href="/">Help & FAQs</a></li>
              <li><a href="/">Store Locations</a></li>
              <li><a href="/">Orders and Returns</a></li>
            </ul>
          </div>
          <div className="col-md-2">
            <h6 className="footer-heading">Watches</h6>
            <ul className="footer-links list-unstyled">
              <li><a href="/">Hizone Watch</a></li>
              <li><a href="/">Giordano Watch</a></li>
              <li><a href="/">Romex Watch</a></li>
              <li><a href="/">Smart Watches</a></li>
              <li><a href="/">Philippe Watches</a></li>
            </ul>
          </div>
          <div className="col-md-2">
            <h6 className="footer-heading">Support</h6>
            <ul className="footer-links list-unstyled">
              <li><a href="/">Chat Support</a></li>
              <li><a href="/">E-Mail Support</a></li>
              <li><a href="/">24/7 Support</a></li>
              <li><a href="/">Customer Stories</a></li>
              <li><a href="/">Terms of Use</a></li>
            </ul>
          </div>
          <div className="col-md-12">
            <div className="social-icons my-3 d-flex justify-content-center">
              <a href="/" className="mx-2"><i className="fab fa-twitter"></i></a>
              <a href="/" className="mx-2"><i className="fab fa-facebook-f"></i></a>
              <a href="/" className="mx-2"><i className="fab fa-pinterest-p"></i></a>
              <a href="/" className="mx-2"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-12">
            <p className="footer-bottom-text mt-3">
              All Right Reserved © 2024, Chrono Dial (password: buddha)
            </p>
            <div className="payment-icons my-3 d-flex justify-content-center">
              <i className="fab fa-cc-visa mx-2"></i>
              <i className="fab fa-cc-mastercard mx-2"></i>
              <i className="fab fa-cc-amex mx-2"></i>
              <i className="fab fa-cc-paypal mx-2"></i>
              <i className="fab fa-cc-discover mx-2"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
