import React from "react";
import LogoLink from "../logo/LogoLink";

class HeaderTopBar extends React.Component {
  render() {
    return (
      <div className="top-bar d-none d-lg-block">
        <div className="container d-flex align-items-center justify-content-between">
          <LogoLink />
          <div className="top-info">
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-phone-alt" aria-hidden="true"></i>
              </div>
              <div className="info-description">
                <span className="info-title">Phone:</span>
                <a className="info-link" href={`tel:${this.props.siteDetails.phone}`}>{this.props.siteDetails.phone}</a>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-home" aria-hidden="true"></i>
              </div>
              <div className="info-description">
                <span className="info-title">Address:</span>
                <address className="info-text">{this.props.siteDetails.address}</address>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-envelope" aria-hidden="true"></i>
              </div>
              <div className="info-description">
                <span className="info-title">Email:</span>
                <a className="info-link" href={`mailto:${this.props.siteDetails.email}`}>{this.props.siteDetails.email}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderTopBar;