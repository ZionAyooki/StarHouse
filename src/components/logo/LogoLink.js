import React from "react";
import {Link} from "react-router-dom";

class LogoLink extends React.Component {
  render() {
    return (
      <Link to="/" className="logo-link" aria-label="Star house homepage">
          <img src={`${process.env.PUBLIC_URL}/images/logos/starhouse-logo-green.png`} alt="Star house logo"/>
          <span>StarHouse</span>
      </Link>
    );
  }
}

export default LogoLink;