import React from "react";
import ComboBox from "./ComboBox";
import {data} from "../../data/fakeData";
import moment from "moment";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dealType: 'rent',
      region: null,
      city: null,
      houseType: 'all',
      entryDate: moment(),
      rooms: {
        from: '',
        to: ''
      },
      floor: {
        from: '',
        to: ''
      },
      price: {
        from: '',
        to: ''
      },
      additions: {
        parking: false,
        elevator: false,
        balcony: false,
        furniture: false,
        pets: false
      }
    };
  }

  handleChangeDeal = (e) => {
    this.setState(() => ({
      dealType: e.target.value
    }));
  }

  handleChangeRegion = (region) => {
    let cityObj = this.state.city;
    if (cityObj) {
      cityObj = region && this.state.city.regionId === region.id ? cityObj : null;
    }
    this.setState({
      region: region,
      city: cityObj
    });
  }

  handleChangeCity = (city) => {
    this.setState({
      city: city
    });
  }

  handleChangeHouse = (e) => {
    const newVal = e.target.value;
    this.setState({
      houseType: newVal
    });
  }

  handleChangeDate = (e) => {
    const newDate = moment(e.target.value);
    if (newDate._isValid) {
      this.setState({
        entryDate: newDate
      });
    }
  }

  handleChangeNumber = (e) => {
    const el = e.target;
    const key = el.getAttribute('data-key');
    const subkey = el.getAttribute('data-subkey');
    const newVal = parseInt(el.value) || '';
    this.setState((prevState) => ({
      [key]: {
        ...prevState[key],
        [subkey]: newVal
      }
    }));
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
    // set the query line
    // return redirect to search page with the query
  }

  render() {
    const regionsList = data.regions;
    const citiesList = data.cities.filter((city) => {
      return this.state.region === null || city.regionId === this.state.region.id;
    });
    const houseTypesList = data.houseTypes.map((item) => {
      return <option key={item.id} value={item.code}>{item.name}</option>
    });
    return (
      <div className="container">
        <form id="search-form" onSubmit={this.handleSubmit}>
          <fieldset className="deal-type-row">
            <legend className="visually-hidden">Deal type</legend>
            <div className="deal-type-item">
              <input id="deal-type-rent" type="radio" name="deal-type" value="rent" checked={this.state.dealType === 'rent'} onChange={this.handleChangeDeal} />
              <label htmlFor="deal-type-rent">For Rent</label>
            </div>
            <div className="deal-type-item">
              <input id="deal-type-sale" type="radio" name="deal-type" value="sale" checked={this.state.dealType === 'sale'} onChange={this.handleChangeDeal} />
              <label htmlFor="deal-type-sale">For Sale</label>
            </div>
          </fieldset>
          <div className="row mx-0 py-3">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
              <ComboBox name="region" label="Region" list={regionsList} setItem={this.handleChangeRegion} />
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
              <ComboBox name="city" label="City" list={citiesList} setItem={this.handleChangeCity} key={this.state.region ? this.state.region.id : 0} />
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
              <div className="select-group">
                <label htmlFor="type" className="form-label">House Type</label>
                <select id="type" className="form-select" defaultValue={this.state.houseType} onChange={this.handleChangeHouse}>
                  <option value='all'>All</option>
                  {houseTypesList}
                </select>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
              <label htmlFor="date" className="form-label">Entry date</label>
              <input
                id="date" type="date" className="form-control" value={this.state.entryDate.format('YYYY-MM-DD')}
                onChange={this.handleChangeDate}
              />
            </div>
            <fieldset className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
              <legend className="form-legend">Rooms</legend>
              <div className="input-group">
                <label htmlFor="rooms-from" className="visually-hidden">Rooms from</label>
                <input id="rooms-from" type="number" className="form-control" placeholder="From" data-key="rooms" data-subkey="from"
                       value={this.state.rooms.from} onChange={this.handleChangeNumber}
                />
                <span className="input-group-text">--</span>
                <label htmlFor="rooms-to" className="visually-hidden">Rooms to</label>
                <input id="rooms-to" type="number" className="form-control" placeholder="To" data-key="rooms" data-subkey="to"
                       value={this.state.rooms.to} onChange={this.handleChangeNumber}
                />
              </div>
            </fieldset>
            <fieldset className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
              <legend className="form-legend">Floor</legend>
              <div className="input-group">
                <label htmlFor="floor-from" className="visually-hidden">Floor from</label>
                <input id="floor-from" type="number" className="form-control" placeholder="From" data-key="floor" data-subkey="from"
                       value={this.state.floor.from} onChange={this.handleChangeNumber}
                />
                <span className="input-group-text">--</span>
                <label htmlFor="floor-to" className="visually-hidden">Floor to</label>
                <input id="floor-to" type="number" className="form-control" placeholder="To" data-key="floor" data-subkey="to"
                       value={this.state.floor.to} onChange={this.handleChangeNumber}
                />
              </div>
            </fieldset>
            <fieldset className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
              <legend className="form-legend">Price</legend>
              <div className="input-group">
                <label htmlFor="price-from" className="visually-hidden">Price from</label>
                <input id="price-from" type="number" className="form-control" placeholder="From" data-key="price" data-subkey="from"
                       value={this.state.price.from} onChange={this.handleChangeNumber}
                />
                <span className="input-group-text">--</span>
                <label htmlFor="price-to" className="visually-hidden">Price to</label>
                <input id="price-to" type="number" className="form-control" placeholder="To" data-key="price" data-subkey="to"
                       value={this.state.price.to} onChange={this.handleChangeNumber}
                />
              </div>
            </fieldset>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2 align-self-end">
              <button className="btn btn-block w-100 btn-more-options collapsed" type="button" data-bs-target="#additions"
                      data-bs-toggle="collapse" aria-expanded="false" aria-controls="additions">
                More options
              </button>
            </div>
            <div id="additions" className="col-12 mb-2 collapse">
              <fieldset>
                <legend className="form-legend">Additions</legend>
                <div className="form-check form-check-inline col-4 col-sm-3 col-md-2 mb-2">
                  <input className="form-check-input" type="checkbox" id="form-parking" name="additions" value="parking"
                         checked={this.state.additions.parking} onChange={this.handleAdditions}
                  />
                  <label className="form-check-label" htmlFor="form-parking">Parking</label>
                </div>
                <div className="form-check form-check-inline col-4 col-sm-3 col-md-2 mb-2">
                  <input className="form-check-input" type="checkbox" id="form-elevator" name="additions" value="elevator"
                         checked={this.state.additions.elevator} onChange={this.handleAdditions}
                  />
                  <label className="form-check-label" htmlFor="form-elevator">Elevator</label>
                </div>
                <div className="form-check form-check-inline col-4 col-sm-3 col-md-2 mb-2">
                  <input className="form-check-input" type="checkbox" id="form-balcony" name="additions" value="balcony"
                         checked={this.state.additions.balcony} onChange={this.handleAdditions}
                  />
                  <label className="form-check-label" htmlFor="form-balcony">Balcony</label>
                </div>
                <div className="form-check form-check-inline col-4 col-sm-3 col-md-2 mb-2">
                  <input className="form-check-input" type="checkbox" id="form-furniture" name="additions" value="furniture"
                         checked={this.state.additions.furniture} onChange={this.handleAdditions}
                  />
                  <label className="form-check-label" htmlFor="form-furniture">Furniture</label>
                </div>
                <div className="form-check form-check-inline col-4 col-sm-3 col-md-2 mb-2">
                  <input className="form-check-input" type="checkbox" id="form-pets" name="additions" value="pets"
                         checked={this.state.additions.pets} onChange={this.handleAdditions}
                  />
                  <label className="form-check-label" htmlFor="form-pets">Pets</label>
                </div>
              </fieldset>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-block btn-search w-100">Search</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchForm;