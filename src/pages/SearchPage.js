import React from "react";
import HeroHeading from "../components/headings/HeroHeading";
import SearchForm from "../components/forms/SearchForm";
import SectionHeading from "../components/headings/SectionHeading";
import HouseCard from "../components/houses/HouseCard";

class SearchPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchFilter: this.props.searchState,
      houseList: this.props.getHousesFiltered()
    };
  }

  searchUpdate = (searchObj) => {
    this.props.searchUpdate(searchObj);
    this.updateHouses(searchObj);
  }

  updateHouses = (searchObj) => {
    this.setState(() => ({
      searchFilter: searchObj,
      houseList: this.props.getHousesFiltered()
    }));
  }

  /*
  searchState={this.state.search} searchUpdate={this.searchUpdate} results={this.getHousesFiltered()}
                  categories={this.state.categories} getCitiesByRegion={this.getCitiesByRegion}
                  getRegionByCity={this.getRegionByCity}
   */
  render() {
    const houseCards = this.state.houseList.map((house) => {
      return (
        <HouseCard key={house.id} house={house} categories={this.props.categories} />
      );
    })
    return (
      <main>
        <HeroHeading title="Search" slogan="Your journey to your dream house starts here" />
        <section className="section">
          <SearchForm
            searchState={this.props.searchState} searchUpdate={this.searchUpdate} categories={this.props.categories}
            getCitiesByRegion={this.props.getCitiesByRegion} getRegionByCity={this.props.getRegionByCity}
            getRegionById={this.props.getRegionById} getCityById={this.props.getCityById}
          />
        </section>
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