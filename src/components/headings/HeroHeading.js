import React from "react";

class HeroHeading extends React.Component {
  render() {
    return (
      <div className={`hero-heading ${this.props.isLarge ? 'hero-lg' : ''}`}>
        <div className="hero-box overlay-bg">
          <h1 className="hero-title">{this.props.title}</h1>
          {
            this.props.slogan && <p className="hero-slogan">{this.props.slogan}</p>
          }
        </div>
      </div>
    );
  }
}

export default HeroHeading;