import React from "react";
import HeaderTopBar from "./HeaderTopBar";
import HeaderNavBar from "./HeaderNavBar";

class Header extends React.Component {
  render() {
    return (
      <div>
        <header className="site-header">
          <HeaderTopBar />
          <HeaderNavBar />
        </header>
      </div>
    );
  }
}

export default Header;