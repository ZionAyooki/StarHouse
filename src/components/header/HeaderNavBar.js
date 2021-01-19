import React from "react";
import LogoLink from "../logo/LogoLink";
import {NavLink} from "react-router-dom";

class HeaderNavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg top-nav">
        <div className="container">
          <div className="navbar-brand d-lg-none">
            <LogoLink />
          </div>
          <button className="navbar-toggler menu-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#site-menu" aria-controls="site-menu" aria-expanded="false" aria-label="Site menu">
            <span className="menu-button-icon"></span>
          </button>
          <div id="site-menu" className="collapse navbar-collapse">
            <ul className="navbar-nav w-100">
              <li className="nav-item">
                <NavLink exact to="/" className="nav-link">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/search" className="nav-link">Search</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/services" className="nav-link">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/about" className="nav-link">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/contact" className="nav-link">Contact</NavLink>
              </li>
              <li className="nav-item ms-lg-auto">
                <NavLink exact to="/login" className="nav-link">Agents login</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default HeaderNavBar;