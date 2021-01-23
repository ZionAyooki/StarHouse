import React from "react";

class SectionHeading extends React.Component {
  render() {
    return (
      <div className="section-heading">
        <h2 className="section-title">{this.props.title}</h2>
        <div className="section-title-divider"></div>
        {
          this.props.slogan && <p className="section-slogan">{this.props.slogan}</p>
        }
      </div>
    );
  }
}

export default SectionHeading;