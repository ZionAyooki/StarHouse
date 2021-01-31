import React from "react";
import ComboBox from "./ComboBox";
import DealTypeRadio from "./uiElements/DealTypeRadio";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props.searchState,
      activeCities: this.props.categories.cities
    };
  }

  handleChangeNumber = (e) => {
    const newVal = e.target.value !== '' ? parseInt(e.target.value) : '';
    this.setState(() => ({
      [e.target.name]: newVal
    }));
  }

  handleChangeRegion = (regionId) => {
    this.setState((prevState) => ({
      regionId: regionId,
      cityId: (!regionId || (prevState.cityId && this.props.getCityById(prevState.cityId).regionId === regionId)) ? prevState.cityId : null,
      activeCities: this.props.getCitiesByRegion(regionId)
    }));
  }
  handleChangeCity = (cityId) => {
    this.setState(() => ({
      cityId: cityId
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
    const searchObj = { ...this.state };
    delete searchObj.activeCities;
    this.props.searchUpdate(searchObj);
  }

  /*
  searchState={this.props.searchState} searchUpdate={this.props.searchUpdate} categories={this.props.categories}
            getCitiesByRegion={this.props.getCitiesByRegion} getRegionByCity={this.props.getRegionByCity}
   */

  render() {
    const dealTypes = this.props.categories.dealTypes.map((item) => {
      return <DealTypeRadio key={item.id} deal={item} status={this.state.dealType === item.id} handleChange={this.handleChangeNumber} />
    });
    const regionsList = this.props.categories.regions;
    const houseTypes = this.props.categories.houseTypes.map((item) => {
      return <option key={item.id} value={item.id}>{item.name}</option>
    });

    return (
      <div className="container mb-5">
        <form id="search-form" onSubmit={this.handleSubmit}>
          <fieldset className="deal-type-row">
            <legend className="visually-hidden">Deal type</legend>
            {dealTypes}
          </fieldset>
          <div className="row mx-0 py-3">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
              <ComboBox
                name="region" label="Region" list={regionsList} setItem={this.handleChangeRegion}
                activeItem={this.props.getRegionById(this.state.regionId)}
              />
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
              <ComboBox
                name="city" label="City" setItem={this.handleChangeCity} activeItem={this.props.getCityById(this.state.cityId)}
                list={[...this.state.activeCities].sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)}
                key={this.state.regionId !== null ? this.state.regionId : 0}
              />
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
              <div className="select-group">
                <label htmlFor="type" className="form-label">House Type</label>
                <select
                  id="type" className="form-select" name="houseType"
                  defaultValue={this.state.houseType} onChange={this.handleChangeNumber}
                >
                  {houseTypes}
                </select>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2 align-self-end">
              <button className="btn btn-block w-100 btn-more-options collapsed" type="button" data-bs-target="#additions"
                      data-bs-toggle="collapse" aria-expanded="false" aria-controls="additions">
                More options
              </button>
            </div>
            <div id="additions" className="col-12 mb-2 collapse">
              <div className="row">
                <fieldset className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                  <legend className="form-legend">Rooms</legend>
                  <div className="input-group">
                    <label htmlFor="roomsFrom" className="visually-hidden">Rooms from</label>
                    <input
                      id="roomsFrom" type="number" className="form-control" placeholder="From" name="roomsFrom"
                      value={this.state.roomsFrom} onChange={this.handleChangeNumber}
                    />
                    <span className="input-group-text">--</span>
                    <label htmlFor="roomsTo" className="visually-hidden">Rooms to</label>
                    <input
                      id="roomsTo" type="number" className="form-control" placeholder="To" name="roomsTo"
                      value={this.state.roomsTo} onChange={this.handleChangeNumber}
                    />
                  </div>
                </fieldset>
                <fieldset className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                  <legend className="form-legend">Floor</legend>
                  <div className="input-group">
                    <label htmlFor="floorFrom" className="visually-hidden">Floor from</label>
                    <input
                      id="floorFrom" type="number" className="form-control" placeholder="From" name="floorFrom"
                      value={this.state.floorFrom} onChange={this.handleChangeNumber}
                    />
                    <span className="input-group-text">--</span>
                    <label htmlFor="floorTo" className="visually-hidden">Floor to</label>
                    <input
                      id="floorTo" type="number" className="form-control" placeholder="To" name="floorTo"
                      value={this.state.floorTo} onChange={this.handleChangeNumber}
                    />
                  </div>
                </fieldset>
                <fieldset className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                  <legend className="form-legend">Price</legend>
                  <div className="input-group">
                    <label htmlFor="priceFrom" className="visually-hidden">Price from</label>
                    <input
                      id="priceFrom" type="number" className="form-control" step={100} placeholder="From" name="priceFrom"
                      value={this.state.priceFrom} onChange={this.handleChangeNumber}
                    />
                    <span className="input-group-text">--</span>
                    <label htmlFor="priceTo" className="visually-hidden">Price to</label>
                    <input
                      id="priceTo" type="number" className="form-control" step={100} placeholder="To" name="priceTo"
                      value={this.state.priceTo} onChange={this.handleChangeNumber}
                    />
                  </div>
                </fieldset>
              </div>
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