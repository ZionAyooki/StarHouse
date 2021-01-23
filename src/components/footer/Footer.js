import React from "react";
import LogoLink from "../logo/LogoLink";

class Footer extends React.Component {
  render() {
    return (
      <footer id="site-foot">
        <div className="container">
          <LogoLink />
          <div className="row align-items-start justify-content-between footer-info">
            <div className="col-12 col-sm-6 col-md-4 mb-3">
              <h2>Company</h2>
              <ul>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Partners</a>
                </li>
                <li>
                  <a href="#">Career at Star House</a>
                </li>
                <li>
                  <a href="#">Site map</a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-md-4 mb-3">
              <h2>Legal</h2>
              <ul>
                <li>
                  <a href="#">Terms of use</a>
                </li>
                <li>
                  <a href="#">Privacy policy</a>
                </li>
                <li>
                  <a href="#">Accessibility</a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-md-4 mb-3">
              <h2>Contact</h2>
              <div>Email</div>
              <div>Phone</div>
              <div>Address</div>
              <div>Working hours</div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              Social links
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center footer-copy">
              &copy; company name 2020. all rights reserved.
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;