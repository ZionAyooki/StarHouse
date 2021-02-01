import React from "react";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import moment from "moment";

class HousePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      house: {}
    }
  }

  componentDidMount() {
    const houseId = this.props.match.params.id;
    const house = this.props.getHouse(houseId);
    this.setState(() => ({
      isLoading: false,
      house: house
    }));
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>
    }
    if (!this.state.house) {
      return <Redirect to="/notfound" />
    }
    const house = this.state.house;
    const city = this.props.categories.cities.find(item => item.id === house.cityId).name;
    const houseType = this.props.categories.houseTypes.find(item => item.id === house.houseTypeId).name;
    const dealType = this.props.categories.dealTypes.find(item => item.id === house.dealTypeId).name;
    const additions = house.additions.map((item, index) => {
      return (
        <li key={index}>
          <i className="fas fa-check text-success" aria-hidden={true}></i> {item}
        </li>
      );
    });
    const agent = this.props.getAgent(house.agentId);
    const entryDate = moment(house.entryDate).diff(moment()) > 0 ? moment(house.entryDate).format('DD/MM/YYYY') : moment().format('DD/MM/YYYY');
    return (
      <main>
        <section className="section">
          <div className="container single-house">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-9 d-flex align-items-center justify-content-between house-page-head">
                <div className="d-flex flex-column">
                  <h1 className="house-page-title">{house.address}, {city}</h1>
                  <p className="house-page-type">{houseType}</p>
                </div>
                <div className="d-flex flex-column">
                  <p className="house-page-deal">For {dealType}</p>
                  <p className="house-page-price">${house.price} {dealType === 'rent' ? <span className="house-page-rent">/ month</span> : null}</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-12 col-lg-9">
                <div className="row justify-content-between align-items-start">
                  <div className="col-12 col-md-7 mb-3 house-page-box">
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
                          <span>{entryDate}</span>
                        </div>
                      </div>
                    </div>
                    <div className="house-page-description">
                      <h2 className="house-page-description-title">Description</h2>
                      <p className="house-page-description-info">{house.description}</p>
                    </div>
                    <div className="house-page-features mb-3">
                      <h2 className="house-page-features-title">House additions</h2>
                      <ul className="house-page-features-list">
                        {additions}
                      </ul>
                    </div>
                    <img className="img-fluid d-block mx-auto" src={house.imgUrl} alt="" />
                  </div>
                  <div className="col-12 col-md-4 house-page-box text-center">
                    <h2 className="house-page-agent-title">Listed by</h2>
                    <img className="house-page-agent-img" src={agent.imgUrl} alt=""/>
                    <p className="house-page-agent-name">{agent.name}</p>
                    <div className="house-page-agent-details">
                      <p><strong>Email:</strong> {agent.email}</p>
                      <p><strong>Phone:</strong> {agent.phone}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default withRouter(HousePage);