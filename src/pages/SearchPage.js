import React from "react";
import HeroHeading from "../components/headings/HeroHeading";
import SearchForm from "../components/forms/SearchForm";
import SectionHeading from "../components/headings/SectionHeading";
import HouseCard from "../components/houses/HouseCard";

class SearchPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchFilter: {},
      houseList: this.props.houseList
    };
  }

  updateHouses = (searchObj) => {
    const newHouseList = this.props.houseList.filter((house) => {
      if (house.dealTypeId !== searchObj.dealType) { return false; }
      if (searchObj.region && house.regionId !== searchObj.region.id) { return false; }
      if (searchObj.city && house.cityId !== searchObj.city.id) { return false; }
      if (searchObj.houseType !== 0 && house.houseTypeId !== searchObj.houseType) { return false; }
      if (searchObj.rooms.from && house.rooms < searchObj.rooms.from) { return false; }
      if (searchObj.rooms.to && house.rooms > searchObj.rooms.to) { return false; }
      if (searchObj.floor.from && house.floor < searchObj.floor.from) { return false; }
      if (searchObj.floor.to && house.floor > searchObj.floor.to) { return false; }
      if (searchObj.price.from && house.price < searchObj.price.from) { return false; }
      if (searchObj.price.to && house.price > searchObj.price.to) { return false; }
      if (searchObj.additions.parking && !house.additions.includes("Parking")) { return false; }
      if (searchObj.additions.elevator && !house.additions.includes("Elevator")) { return false; }
      if (searchObj.additions.balcony && !house.additions.includes("Balcony")) { return false; }
      if (searchObj.additions.furniture && !house.additions.includes("Furniture")) { return false; }
      if (searchObj.additions.pets && !house.additions.includes("Pets")) { return false; }
      return true;
    });
    this.setState({
      houseList: newHouseList
    });
  }

  render() {
    const houseCards = this.state.houseList.map((house) => {
      return (
        <HouseCard key={house.id} house={house} />
      );
    })
    return (
      <main>
        <HeroHeading isLarge={false} title="Search" slogan="Your journey to your dream house starts here" />
        <SearchForm updateList={this.updateHouses} />
        <section className="section">
          <div className="container">
            <SectionHeading title="Search Results" />
            <div className="row">
              {houseCards}
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default SearchPage;