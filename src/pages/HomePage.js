import React from "react";
import Header from "../components/header/Header";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div>This is from homepage component</div>
      </div>
    );
  }
}

export default HomePage;