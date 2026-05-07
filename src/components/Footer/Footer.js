import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Links */}
      <div className="footer__top">
        <div className="footer__section">
          <h4 className="footer__heading">ABOUT</h4>

          <ul className="footer__list">
            <li><a href="/">Contact Us</a></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Careers</a></li>
            <li><a href="/">Flipkart Stories</a></li>
            <li><a href="/">Press</a></li>
            <li><a href="/">Flipkart Wholesale</a></li>
            <li><a href="/">Corporate Information</a></li>
          </ul>
        </div>

        <div className="footer__section">
          <h4 className="footer__heading">HELP</h4>

          <ul className="footer__list">
            <li><a href="/">Payments</a></li>
            <li><a href="/">Shipping</a></li>
            <li><a href="/">Cancellation & Returns</a></li>
            <li><a href="/">FAQ</a></li>
            <li><a href="/">Report Infringement</a></li>
          </ul>
        </div>

        <div className="footer__section">
          <h4 className="footer__heading">CONSUMER POLICY</h4>

          <ul className="footer__list">
            <li><a href="/">Cancellation & Returns</a></li>
            <li><a href="/">Terms Of Use</a></li>
            <li><a href="/">Security</a></li>
            <li><a href="/">Privacy</a></li>
            <li><a href="/">Sitemap</a></li>
            <li><a href="/">Grievance Redressal</a></li>
            <li><a href="/">EPR Compliance</a></li>
          </ul>
        </div>

        <div className="footer__section">
          <h4 className="footer__heading">SOCIAL</h4>

          <ul className="footer__list">
            <li><a href="/">Facebook</a></li>
            <li><a href="/">Twitter</a></li>
            <li><a href="/">YouTube</a></li>
          </ul>
        </div>

        <div className="footer__section footer__section--right">
          <div className="footer__app">
            <h4 className="footer__heading">MAIL US</h4>

            <p className="footer__address">
              Flipkart Internet Private Limited,<br />
              Buildings Alyssa, Begonia &<br />
              Clove Embassy Tech Village,<br />
              Outer Ring Road, Devarabeesanahalli Village,<br />
              Bengaluru, 560103,<br />
              Karnataka, India
            </p>
          </div>

          <div className="footer__registered">
            <h4 className="footer__heading">REGISTERED OFFICE ADDRESS</h4>

            <p className="footer__address">
              Flipkart Internet Private Limited,<br />
              Sy No. 90/1, 2nd Floor,<br />
              Pai Layout, Survey No-14,<br />
              D.No-12, Outer Ring Road,<br />
              Devarabeesanahalli Village,<br />
              Varthur Hobli, Bengaluru East,<br />
              Bengaluru Urban District,<br />
              Karnataka Pin Code - 560103<br />

              <a href="/">CIN : U51109KA2012PTC066107</a>
              <br />

              <a href="tel:04445614700">
                Telephone: 044-45614700
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="footer__divider" />

      {/* Bottom */}
      <div className="footer__bottom">
        <div className="footer__bottom-links">
          <a href="/">
            <span className="footer__icon">🛒</span>
            Become a Seller
          </a>

          <a href="/">
            <span className="footer__icon">⭐</span>
            Advertise
          </a>

          <a href="/">
            <span className="footer__icon">🎁</span>
            Gift Cards
          </a>

          <a href="/">
            <span className="footer__icon">❓</span>
            Help Center
          </a>
        </div>

        <div className="footer__copy-wrapper">
          <p className="footer__copy">
            © 2007-2024 Flipkart.com
          </p>

          <p className="footer__developer">
            Designed & Developed by
            <span className="footer__developer-name">
              {' '}VTCodeX
            </span>
          </p>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="footer__payments">
        <span className="footer__pay-label">
          Payment Methods
        </span>

        <div className="footer__pay-icons">
          <span className="pay-icon">Visa</span>
          <span className="pay-icon">Mastercard</span>
          <span className="pay-icon">Rupay</span>
          <span className="pay-icon">NetBanking</span>
          <span className="pay-icon">UPI</span>
          <span className="pay-icon">EMI</span>
          <span className="pay-icon">COD</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;