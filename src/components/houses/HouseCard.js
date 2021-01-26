import React from "react";
import MyData from "../../data/addresses.json"
import moment from "moment";
import {Link} from "react-router-dom";

class HouseCard extends React.Component {
  render() {
    const { house } = this.props;
    const city = MyData.cities.find(item => item.id === house.cityId).name;
    const houseType = MyData.houseTypes.find(item => item.id === house.houseTypeId).name;
    const dealType = MyData.dealTypes.find(item => item.id === house.dealTypeId).name;
    return (
      <div className="col-12 col-md-6 col-lg-4 mb-3">
        <div className="house-box">
          <div>
            <img className="house-image" src={house.imgUrl} alt="" />
            <div className="house-head">
              <h3 className="house-address">{house.address}, {city}</h3>
              <div className="house-type-map">
                <span>{houseType}</span>
                {/*<span>*/}
                {/*  <i className="fas fa-map-marker" aria-hidden="true"></i>*/}
                {/*  Show on map*/}
                {/*</span>*/}
              </div>
            </div>
            <div className="house-details">
              <div className="house-details-item">
                <span className="house-details-item-title">Floor</span>
                <div className="house-details-item-info">
                  <img src="images/search/elevator.svg" alt=""/>
                  <span>{house.floor}</span>
                </div>
              </div>
              <div className="house-details-item">
                <span className="house-details-item-title">Rooms</span>
                <div className="house-details-item-info">
                  <img src="images/search/double-bed.svg" alt=""/>
                  <span>{house.rooms}</span>
                </div>
              </div>
              <div className="house-details-item">
                <span className="house-details-item-title">Size <small>(m<sup>2</sup>)</small></span>
                <div className="house-details-item-info">
                  <img src="images/search/house-size.svg" alt=""/>
                  <span>{house.size}</span>
                </div>
              </div>
              <div className="house-details-item">
                <span className="house-details-item-title">Entry</span>
                <div className="house-details-item-info">
                  <img src="images/search/calendar.svg" alt=""/>
                  <span>{moment(house.entryDate).format('DD/MM')}</span>
                </div>
              </div>
            </div>
            <div className="house-description">
              <strong>Description:</strong> {house.description}
            </div>
          </div>
          <div className="house-foot">
            <div className="house-price">
              <span className="house-price-title">For {dealType}</span>
              <div>
                ${house.price}
                {/*<span className="house-rent"> / month</span>*/}
              </div>
            </div>
            <Link to={`/search/${house.id}`} className="btn btn-more-info">View house</Link>
            {/*<button className="btn btn-more-info">View Property</button>*/}
          </div>
        </div>
      </div>
    );
  }
}

export default HouseCard;