import React from "react";
import LogoLink from "../logo/LogoLink";
import {NavLink} from "react-router-dom";

class AgentNavbar extends React.Component {
  render() {
    return (
      <header className="site-header">
        <nav className="navbar navbar-expand-lg top-nav">
          <div className="container">
            <div className="navbar-brand">
              <LogoLink />
            </div>
            <button className="navbar-toggler menu-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#site-menu" aria-controls="site-menu" aria-expanded="false" aria-label="Site menu">
              <span className="menu-button-icon"></span>
            </button>
            <div id="site-menu" className="collapse navbar-collapse ms-3">
              <ul className="navbar-nav w-100">
                <li className="nav-item">
                  <NavLink exact to="/agents/dashboard" className="nav-link">Dashboard</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact to="/agents/properties" className="nav-link">Properties</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact to="/agents/calendar" className="nav-link">Calendar</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact to="/agents/messages" className="nav-link">Messages</NavLink>
                </li>
                <li className="nav-item ms-lg-auto">
                  <button className="btn btn-danger" onClick={this.props.logout}>Logout</button>
                  {/*<NavLink exact to="/agents/profile" className="nav-link">My profile</NavLink>*/}
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