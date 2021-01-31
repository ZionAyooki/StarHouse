import React from "react";
import AgentPropertyRow from "../../agents/AgentPropertyRow";
import moment from "moment";
import NewHouseForm from "../../components/forms/NewHouseForm";

class AgentPropertiesPage extends React.Component {
  constructor(props) {
    super(props);

    this.modalCloseBtn = React.createRef();

    this.state = {
      myHouses: this.props.allHouses.filter((house) => {
        return house.agentId === this.props.activeUser.id;
      }),
      editHouse: null,
      editHouseId: 0,
      isShowModal: false
    };
  }

  houseAdd = (houseObj) => {
    const newHouse = {
      ...houseObj,
      id: this.props.getNewId('house'),
      regionId: this.props.getCityById(houseObj.cityId).regionId,
      agentId: this.props.activeUser.id,
      createdAt: moment().format('YYYY-MM-DD'),
      closedAt: null
    };
    this.setState((prevState) => ({
      myHouses: [...prevState.myHouses, newHouse],
      editHouse: null
    }));
    this.props.houseAdd(newHouse);
    this.modalCloseBtn.current.click();
  }

  houseEdit = (houseObj) => {
    this.setState((prevState) => {
      const filteredHouses = prevState.myHouses.map((house) => {
        if (house.id === houseObj.id) { return houseObj; }
        return house;
      });
      return {
        myHouses: filteredHouses,
        editHouse: null
      };
    });
    this.props.houseEdit(houseObj.id, houseObj);
    this.modalCloseBtn.current.click();
  }

  removeHouse = (houseId) => {
    const sure = window.confirm('Are you sure you want to delete this house?');
    if (sure) {
      this.setState((prevState) => ({
        myHouses: prevState.myHouses.filter((house) => {
          return houseId !== house.id
        })
      }));
      this.props.houseRemove(houseId);
    }
  }

  toggleDeal = (houseId) => {
    this.setState((prevState) => {
      const filteredHouses = prevState.myHouses.map((house) => {
        if (house.id === houseId) { return { ...house, closedAt: house.closedAt ? null : moment().format('YYYY-MM-DD') }; }
        return house;
      });
      return {
        myHouses: filteredHouses
      };
    });
    this.props.toggleDeal(houseId);
  }

  openModal = (houseObj) => {
    this.setState(() => ({
      editHouse: houseObj,
      editHouseId: this.props.getNewId('random'),
      isShowModal: true
    }));
  }
  closeModal = () => {
    this.setState(() => ({
      editHouse: null,
      editHouseId: 0,
      isShowModal: false
    }));
  }

  render() {
    const myHouses = this.state.myHouses.map((house) => {
      const city = this.props.categories.cities.find(item => item.id === house.cityId).name;
      const houseType = this.props.categories.houseTypes.find(item => item.id === house.houseTypeId).name;
      const dealType = this.props.categories.dealTypes.find(item => item.id === house.dealTypeId).name;
      return (
        <AgentPropertyRow
          key={house.id} house={house} city={city} houseType={houseType} dealType={dealType} houseEdit={this.houseEdit}
          categories={this.props.categories} getCityById={this.props.getCityById} openModal={this.openModal}
          removeHouse={this.removeHouse} toggleDeal={this.toggleDeal}
        />
      );
    });
    return (
      <main>
        <section className="section">
          <div className="container">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h1>My properties</h1>
              <button
                type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#house-modal"
                onClick={() => this.openModal(null)}
              >
                Add new property
              </button>
            </div>
            <div className="row">
              <div className="col-12">
                <table className="table table-responsive table-striped text-center">
                  <thead>
                    <tr>
                      <th>Address</th>
                      <th>Type</th>
                      <th>Deal</th>
                      <th>Rooms</th>
                      <th>Floor</th>
                      <th>Price</th>
                      <th>Closed</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody className="align-middle">
                    {myHouses}
                  </tbody>
                </table>
              </div>
              {/*<div className="col-12">*/}
              {/*  <nav aria-label="Page navigation example">*/}
              {/*    <ul className="pagination justify-content-center">*/}
              {/*      <li className="page-item disabled">*/}
              {/*        <a className="page-link" href="/" tabIndex="-1" aria-disabled="true">Previous</a>*/}
              {/*      </li>*/}
              {/*      <li className="page-item"><a className="page-link" href="/">1</a></li>*/}
              {/*      <li className="page-item"><a className="page-link" href="/">2</a></li>*/}
              {/*      <li className="page-item"><a className="page-link" href="/">3</a></li>*/}
              {/*      <li className="page-item">*/}
              {/*        <a className="page-link" href="/">Next</a>*/}
              {/*      </li>*/}
              {/*    </ul>*/}
              {/*  </nav>*/}
              {/*</div>*/}
            </div>
          </div>
        </section>

        <div className={`modal fade ${this.state.isShowModal ? 'show' : ''}`} id="house-modal" tabIndex="-1" aria-labelledby="house-modal-label" aria-hidden={!this.state.isShowModal}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="house-modal-label">{this.state.editHouse ? 'Edit house' : 'New house'}</h5>
                <button
                  ref={this.modalCloseBtn} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                  onClick={this.closeModal}
                ></button>
              </div>
              <div className="modal-body">
                <NewHouseForm
                  houseAdd={this.houseAdd} houseEdit={this.houseEdit} categories={this.props.categories}
                  getCityById={this.props.getCityById} house={this.state.editHouse}
                  key={this.state.editHouseId}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default AgentPropertiesPage;