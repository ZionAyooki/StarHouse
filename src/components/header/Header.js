import React from "react";
import HeaderTopBar from "./HeaderTopBar";
import HeaderNavBar from "./HeaderNavBar";

class Header extends React.Component {
  render() {
    return (
      <div>
        <header className="site-header">
          <HeaderTopBar siteDetails={this.props.siteDetails} />
          <HeaderNavBar />
        </header>
      </div>
    );
  }
}

export default Header;