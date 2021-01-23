import React from "react";
import {Link} from "react-router-dom";

class CubeCard extends React.Component {
  render() {
    const { imageUrl, title, description } = this.props.item;
    return (
      <div className="col-12 col-lg-6 cube">
        <div className="container-fluid">
          <div className="row g-4 cube-content">
            <div className="col-12 cube-image">
              <img className="img-fluid" src={imageUrl} alt="" />
            </div>
            <div className="col-12 cube-body">
              <h3 className="cube-title">{title}</h3>
              <p className="cube-text">{description}</p>
              <Link className="cube-link" to="/" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CubeCard;