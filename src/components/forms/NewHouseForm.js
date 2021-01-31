import React from "react";
import ComboBox from "./ComboBox";
import moment from "moment";

class NewHouseForm extends React.Component {
  constructor(props) {
    super(props);

    this.resetState = {
      dealTypeId: 1,
      cityId: null,
      houseTypeId: 1,
      entryDate: moment().format('YYYY-MM-DD'),
      rooms: '',
      floor: '',
      price: '',
      additions: {
        parking: false,
        elevator: false,
        balcony: false,
        furniture: false,
        pets: false
      },
      address: '',
      description: '',
      imgUrl: '',
      size: '',
      id: null,
      regionId: null,
      agentId: null,
      createdAt: null,
      closedAt: null
    }

    const houseAdditions = {
      parking: (this.props.house && this.props.house.additions.includes("Parking") ? true : false),
      elevator: (this.props.house && this.props.house.additions.includes("Elevator") ? true : false),
      balcony: (this.props.house && this.props.house.additions.includes("Balcony") ? true : false),
      furniture: (this.props.house && this.props.house.additions.includes("Furniture") ? true : false),
      pets: (this.props.house && this.props.house.additions.includes("Pets") ? true : false)
    };

    this.state = {
      ...(this.props.house ? {...this.props.house, additions: {...houseAdditions} } : this.resetState)
    };
  }

  handleChangeNumber = (e) => {
    const newVal = e.target.value !== '' ? parseInt(e.target.value) : '';
    this.setState(() => ({
      [e.target.name]: newVal
    }));
  }
  handleChangeCity = (cityId) => {
    this.setState(() => ({
      cityId: cityId
    }));
  }
  handleChangeText = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleChangeDate = (e) => {
    this.setState({
      entryDate: moment(e.target.value).format('YYYY-MM-DD')
    });
  }
  handleAdditions = (e) => {
    const key = e.target.value;
    this.setState((prevState) => ({
      additions: {
        ...prevState.additions,
        [key]: !prevState.additions[key]
      }
    }));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newAdditions = [];
    if (this.state.additions.parking) { newAdditions.push("Parking"); }
    if (this.state.additions.elevator) { newAdditions.push("Elevator"); }
    if (this.state.additions.balcony) { newAdditions.push("Balcony"); }
    if (this.state.additions.furniture) { newAdditions.push("Furniture"); }
    if (this.state.additions.pets) { newAdditions.push("Pets"); }
    const newHouse = {
      ...this.state,
      additions: newAdditions
    }
    if (this.state.id) {
      this.props.houseEdit(newHouse);
    } else {
      this.props.houseAdd(newHouse);
    }
    this.setState(() => ({
      ...this.resetState
    }));
  }

  render() {
    const dealTypes = this.props.categories.dealTypes.map(item => <option key={item.id} value={item.id}>{item.name}</option>);
    const citiesList = this.props.categories.cities;
    const houseTypes = this.props.categories.houseTypes.slice(1).map(item => <option key={item.id} value={item.id}>{item.name}</option>);
    return (
      <div className="container">
        <form id="new-house-form" onSubmit={this.handleSubmit}>
          <div className="row mx-0 py-3">
            <div className="col-6 mb-2">
              <div className="select-group">
                <label htmlFor="deal" className="form-label">Deal Type</label>
                <select
                  id="deal" className="form-select" name="dealTypeId"
                  defaultValue={this.state.dealTypeId} onChange={this.handleChangeNumber}
                >
                  {dealTypes}
                </select>
              </div>
            </div>
            <div className="col-6 mb-2">
              <div className="select-group">
                <label htmlFor="type" className="form-label">House Type</label>
                <select
                  id="type" className="form-select" name="houseTypeId"
                  defaultValue={this.state.houseTypeId} onChange={this.handleChangeNumber}
                >
                  {houseTypes}
                </select>
              </div>
            </div>
            <div className="col-12 mb-2">
              <ComboBox
                name="city" label="City" setItem={this.handleChangeCity} activeItem={this.props.getCityById(this.state.cityId)}
                list={[...citiesList].sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)}
              />
            </div>
            <div className="col-12 mb-2">
              <label htmlFor="address" className="form-label">Address</label>
              <input
                id="address" className="form-control" type="text" name="address" placeholder="street and number"
                value={this.state.address} onChange={this.handleChangeText}
              />
            </div>
            <div className="col-4 mb-2">
              <label htmlFor="rooms" className="form-label">Rooms</label>
              <input
                id="rooms" className="form-control" type="number" name="rooms"
                value={this.state.rooms} onChange={this.handleChangeNumber}
              />
            </div>
            <div className="col-4 mb-2">
              <label htmlFor="floor" className="form-label">Floor</label>
              <input
                id="floor" className="form-control" type="number" name="floor"
                value={this.state.floor} onChange={this.handleChangeNumber}
              />
            </div>
            <div className="col-4 mb-2">
              <label htmlFor="size" className="form-label">Size</label>
              <input
                id="size" className="form-control" type="number" name="size"
                value={this.state.size} onChange={this.handleChangeNumber}
              />
            </div>
            <div className="col-6 mb-2">
              <label htmlFor="price" className="form-label">Price</label>
              <input
                id="price" className="form-control" type="number" name="price"
                value={this.state.price} onChange={this.handleChangeNumber}
              />
            </div>
            <div className="col-6 mb-2">
              <label htmlFor="entryDate" className="form-label">Entry date</label>
              <input
                id="entryDate" className="form-control" type="date" name="entryDate"
                value={this.state.entryDate} onChange={this.handleChangeDate}
              />
            </div>
            <fieldset className="col-12 mb-2">
              <legend className="form-legend">Additions</legend>
              <div className="form-check form-check-inline col-3 mb-2">
                <input className="form-check-input" type="checkbox" id="form-parking" name="additions" value="parking"
                       checked={this.state.additions.parking} onChange={this.handleAdditions}
                />
                <label className="form-check-label" htmlFor="form-parking">Parking</label>
              </div>
              <div className="form-check form-check-inline col-3 mb-2">
                <input className="form-check-input" type="checkbox" id="form-elevator" name="additions" value="elevator"
                       checked={this.state.additions.elevator} onChange={this.handleAdditions}
                />
                <label className="form-check-label" htmlFor="form-elevator">Elevator</label>
              </div>
              <div className="form-check form-check-inline col-3 mb-2">
                <input className="form-check-input" type="checkbox" id="form-balcony" name="additions" value="balcony"
                       checked={this.state.additions.balcony} onChange={this.handleAdditions}
                />
                <label className="form-check-label" htmlFor="form-balcony">Balcony</label>
              </div>
              <div className="form-check form-check-inline col-3 mb-2">
                <input className="form-check-input" type="checkbox" id="form-furniture" name="additions" value="furniture"
                       checked={this.state.additions.furniture} onChange={this.handleAdditions}
                />
                <label className="form-check-label" htmlFor="form-furniture">Furniture</label>
              </div>
              <div className="form-check form-check-inline col-3 mb-2">
                <input className="form-check-input" type="checkbox" id="form-pets" name="additions" value="pets"
                       checked={this.state.additions.pets} onChange={this.handleAdditions}
                />
                <label className="form-check-label" htmlFor="form-pets">Pets</label>
              </div>
            </fieldset>
            <div className="col-12 mb-2">
              <label htmlFor="image" className="form-label">Image URL</label>
              <input
                id="image" className="form-control" type="text" name="imgUrl"
                value={this.state.imgUrl} onChange={this.handleChangeText}
              />
            </div>
            <div className="col-12 mb-2">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea
                id="description" className="form-control" rows={5} name="description"
                value={this.state.description} onChange={this.handleChangeText}
              />
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-block btn-success w-100">Save</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default NewHouseForm;