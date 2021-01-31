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
      return <div key={index}>{item}</div>
    });
    const agent = this.props.getAgent(house.agentId);
    const entryDate = moment(house.entryDate).diff(moment()) > 0 ? moment(house.entryDate).format('DD/MM/YYYY') : moment().format('DD/MM/YYYY');
    return (
      <main>
        <section className="section">
          <div className="container single-house">
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <h1>{house.address}, {city}</h1>
              </div>
              <div>
                <div>{houseType} for {dealType}</div>
                <div className="text-right">${house.price}</div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
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
                <div className="house-description">
                  <strong>Description:</strong> {house.description}
                </div>
                <div>More details about Arnona and Vaad etc.</div>
              </div>
              <div className="col-12 col-md-6 mb-3">
                <h2>Other features</h2>
                <div>
                  {additions}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-8 mb-3">
                <img className="img-fluid" src={house.imgUrl} alt="" />
              </div>
              <div className="col-12 col-lg-4">
                <section className="agent-details">
                  <img className="img-fluid rounded rounded-circle w-25" src={agent.imgUrl} alt=""/>
                  <p>Listed by</p>
                  <h5>{agent.name}</h5>
                  <table>
                    <tbody>
                      <tr>
                        <td>Email : <span>{agent.email}</span></td>
                      </tr>
                      <tr>
                        <td>Phone : <span>{agent.phone}</span></td>
                      </tr>
                    </tbody>
                  </table>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default withRouter(HousePage);