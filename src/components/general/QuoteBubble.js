import React from "react";

class QuoteBubble extends React.Component {
  render() {
    const { name, city, profileImg, text } = this.props.bubble;
    return (
      <div className="col-12 col-md-6 col-lg-4 mb-3 testimonials-item">
        <div className="testimonials-quote">
          <blockquote>{text}</blockquote>
        </div>
        <div className="testimonials-person">
          <div className="testimonials-person-profile">
            <img src={profileImg} alt={name} />
          </div>
          <div className="testimonials-person-details">
            <span className="testimonials-person-name">{name}</span>
            <span className="testimonials-person-city">- {city}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default QuoteBubble;