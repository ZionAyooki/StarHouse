import React from "react";
import LogoLink from "../logo/LogoLink";
import moment from "moment";
import {Link} from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <footer id="site-foot">
        <div className="container">
          <div className="d-flex justify-content-center mb-5">
              <LogoLink />
          </div>
          <div className="row align-items-start justify-content-between ps-4 ps-sm-0">
            <div className="col-12 col-lg-6 mb-3">
              <h2 className="footer-heading">Contact</h2>
              <div className="container-fluid px-0">
                <div className="row">
                  <div className="col-12 col-sm-6 d-flex flex-column">
                    <a className="footer-link" href="mailto:example@email.com">
                      <i className="fas fa-envelope" aria-hidden={true}></i>
                      <span>example@email.com</span>
                    </a>
                    <a className="footer-link" href="tel:031234567">
                      <i className="fas fa-phone-alt" aria-hidden={true}></i>
                      <span>03-1234567</span>
                    </a>
                    <div className="footer-text">
                      <i className="fas fa-map-marker-alt" aria-hidden={true}></i>
                      <div>
                        <div>123rd Default Street,</div>
                        <div>Tel Aviv</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="footer-text">
                      <i className="fas fa-clock" aria-hidden={true}></i>
                      <div>
                        <div>Sunday - Thursday:</div>
                        <div className="ps-3">08:00 - 17:00</div>
                        <div>Friday:</div>
                        <div className="ps-3">08:00 - 13:00</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 mb-3">
              <h2 className="footer-heading">Company</h2>
              <ul className="footer-links-group" role="presentation">
                <li role="presentation">
                  <Link to="/about" className="footer-link">About us</Link>
                </li>
                <li role="presentation">
                  <Link to="/services" className="footer-link">Services</Link>
                </li>
                <li role="presentation">
                  <Link to="/" className="footer-link">Partners</Link>
                </li>
                <li role="presentation">
                  <Link to="/" className="footer-link">Careers</Link>
                </li>
                <li role="presentation">
                  <Link to="/" className="footer-link">Site map</Link>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 mb-3">
              <h2 className="footer-heading">Legal</h2>
              <ul className="footer-links-group" role="presentation">
                <li role="presentation">
                  <Link to="/" className="footer-link">Terms of use</Link>
                </li>
                <li role="presentation">
                  <Link to="/" className="footer-link">Privacy policy</Link>
                </li>
                <li role="presentation">
                  <Link to="/" className="footer-link">Accessibility</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-12 footer-social">
              <a className="social-link" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook" aria-hidden={true}></i>
                <span className="visually-hidden">Follow us on facebook</span>
              </a>
              <a className="social-link" href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter" aria-hidden={true}></i>
                <span className="visually-hidden">Follow us on twitter</span>
              </a>
              <a className="social-link" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram" aria-hidden={true}></i>
                <span className="visually-hidden">Follow us on instagram</span>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center footer-copy">
              StarHouse &copy; 2000 - {moment().year()}
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;