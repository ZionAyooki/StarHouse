import React from "react";

class TileCard extends React.Component {
  render() {
    const { imgUrl, title, description } = this.props.item;
    return (
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 tile">
        <div className="tile-image">
          <img src={imgUrl} alt={title} />
        </div>
        <div className="tile-body">
          <h3 className="tile-title">{title}</h3>
          <p className="tile-text">{description}</p>
        </div>
      </div>
    );
  }
}

export default TileCard;