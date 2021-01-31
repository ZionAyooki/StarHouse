import React from "react";
import LogoLink from "../logo/LogoLink";
import {NavLink} from "react-router-dom";
import HeaderTopBar from "./HeaderTopBar";

class AgentNavbar extends React.Component {
  render() {
    return (
      <header className="site-header">
        <HeaderTopBar siteDetails={this.props.siteDetails} />
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
                  <NavLink exact to="/agents/dashboard" className="nav-link">Dashboard</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact to="/agents/properties" className="nav-link">My houses</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact to="/agents/calendar" className="nav-link">My meetings</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact to="/agents/messages" className="nav-link">My messages</NavLink>
                </li>
                <li className="nav-item ms-lg-auto text-center">
                  <button className="btn btn-danger h-100" onClick={this.props.handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default AgentNavbar;