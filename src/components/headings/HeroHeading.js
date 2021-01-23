import React from "react";

class HeroHeading extends React.Component {
  render() {
    return (
      <div className={`hero-heading ${this.props.isLarge ? 'hero-lg' : ''}`}>
        <div className="hero-box overlay-bg">
          <h1 className="hero-title">Star House Real Estate</h1>
          <p className="hero-slogan">Let us help you find your next dream home</p>
        </div>
      </div>
    );
  }
}

export default HeroHeading;