import React from "react";
import Header from "../components/header/Header";
import HeroHeading from "../components/headings/HeroHeading";
import SearchForm from "../components/forms/SearchForm";
import Footer from "../components/footer/Footer";
import SectionHeading from "../components/headings/SectionHeading";

class SearchPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <HeroHeading isLarge={false} title="Search" slogan="Your journey to your dream house starts here" />
        <br /><br /><br /><br /><br />
        <SearchForm />
        <br /><br /><br /><br /><br />
        <section id="promoted">
          <div className="container">
            <SectionHeading title="Search Results" />
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4 mb-3">
                <div className="house-box">
                  <div>
                    <img className="house-image" src="images/homes/home1.jpg" alt=""/>
                    <div className="house-head">
                      <h3 className="house-address">123th Some Address, City name</h3>
                      <div className="house-type-map">
                        <span>Penthouse</span>
                        <span>
                    <i className="fas fa-map-marker" aria-hidden="true"></i>
                    Show on map
                  </span>
                      </div>
                    </div>
                    <div className="house-details">
                      <div className="house-details-item">
                        <span className="house-details-item-title">Floor</span>
                        <div className="house-details-item-info">
                          <img src="images/search/elevator.svg" alt=""/>
                          <span>3</span>
                        </div>
                      </div>
                      <div className="house-details-item">
                        <span className="house-details-item-title">Rooms</span>
                        <div className="house-details-item-info">
                          <img src="images/search/double-bed.svg" alt=""/>
                          <span>4</span>
                        </div>
                      </div>
                      <div className="house-details-item">
                        <span className="house-details-item-title">Size <small>(m<sup>2</sup>)</small></span>
                        <div className="house-details-item-info">
                          <img src="images/search/house-size.svg" alt=""/>
                          <span>320</span>
                        </div>
                      </div>
                      <div className="house-details-item">
                        <span className="house-details-item-title">Entry</span>
                        <div className="house-details-item-info">
                          <img src="images/search/calendar.svg" alt=""/>
                          <span>22/22</span>
                        </div>
                      </div>
                    </div>
                    <div className="house-description">
                      <strong>Description:</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                      asperiores consequatur deserunt dicta eaque, earum exercitationem explicabo hic labore nulla
                      numquam obcaecati odio quas, rem saepe ut voluptatem. Explicabo, placeat?
                    </div>
                  </div>
                  <div className="house-foot">
                    <div className="house-price">
                      <span className="house-price-title">For rent</span>
                      <div>
                        $4,000
                        <span className="house-rent"> / month</span>
                      </div>
                    </div>
                    <button className="btn btn-more-info">View Property</button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-3">
                <div className="house-box">
                  <div>
                    <img className="house-image" src="images/homes/home1.jpg" alt=""/>
                    <div className="house-head">
                      <h3 className="house-address">123th Some Address, City name</h3>
                      <div className="house-type-map">
                        <span>Penthouse</span>
                        <span>
                    <i className="fas fa-map-marker" aria-hidden="true"></i>
                    Show on map
                  </span>
                      </div>
                    </div>
                    <div className="house-details">
                      <div className="house-details-item">
                        <span className="house-details-item-title">Floor</span>
                        <div className="house-details-item-info">
                          <img src="images/search/elevator.svg" alt=""/>
                          <span>3</span>
                        </div>
                      </div>
                      <div className="house-details-item">
                        <span className="house-details-item-title">Rooms</span>
                        <div className="house-details-item-info">
                          <img src="images/search/double-bed.svg" alt=""/>
                          <span>4</span>
                        </div>
                      </div>
                      <div className="house-details-item">
                        <span className="house-details-item-title">Size <small>(m<sup>2</sup>)</small></span>
                        <div className="house-details-item-info">
                          <img src="images/search/house-size.svg" alt=""/>
                          <span>320</span>
                        </div>
                      </div>
                      <div className="house-details-item">
                        <span className="house-details-item-title">Entry</span>
                        <div className="house-details-item-info">
                          <img src="images/search/calendar.svg" alt=""/>
                          <span>22/22</span>
                        </div>
                      </div>
                    </div>
                    <div className="house-description">
                      <strong>Description:</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                      asperiores consequatur deserunt dicta eaque.
                    </div>
                  </div>
                  <div className="house-foot">
                    <div className="house-price">
                      <span className="house-price-title">For rent</span>
                      <div>
                        $4,000
                        <span className="house-rent"> / month</span>
                      </div>
                    </div>
                    <button className="btn btn-more-info">View Property</button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-3">
                <div className="house-box">
                  <div>
                    <img className="house-image" src="images/homes/home1.jpg" alt=""/>
                    <div className="house-head">
                      <h3 className="house-address">123th Some Address, City name</h3>
                      <div className="house-type-map">
                        <span>Penthouse</span>
                        <span>
                    <i className="fas fa-map-marker" aria-hidden="true"></i>
                    Show on map
                  </span>
                      </div>
                    </div>
                    <div className="house-details">
                      <div className="house-details-item">
                        <span className="house-details-item-title">Floor</span>
                        <div className="house-details-item-info">
                          <img src="images/search/elevator.svg" alt=""/>
                          <span>3</span>
                        </div>
                      </div>
                      <div className="house-details-item">
                        <span className="house-details-item-title">Rooms</span>
                        <div className="house-details-item-info">
                          <img src="images/search/double-bed.svg" alt=""/>
                          <span>4</span>
                        </div>
                      </div>
                      <div className="house-details-item">
                        <span className="house-details-item-title">Size <small>(m<sup>2</sup>)</small></span>
                        <div className="house-details-item-info">
                          <img src="images/search/house-size.svg" alt=""/>
                          <span>320</span>
                        </div>
                      </div>
                      <div className="house-details-item">
                        <span className="house-details-item-title">Entry</span>
                        <div className="house-details-item-info">
                          <img src="images/search/calendar.svg" alt=""/>
                          <span>22/22</span>
                        </div>
                      </div>
                    </div>
                    <div className="house-description">
                      <strong>Description:</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                      asperiores consequatur deserunt dicta eaque, earum exercitationem explicabo hic labore nulla
                      numquam obcaecati odio quas, rem saepe ut voluptatem. Explicabo, placeat?
                    </div>
                  </div>
                  <div className="house-foot">
                    <div className="house-price">
                      <span className="house-price-title">For rent</span>
                      <div>
                        $4,000
                        <span className="house-rent"> / month</span>
                      </div>
                    </div>
                    <button className="btn btn-more-info">View Property</button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-3">
                <div className="house-box">
                  <div>
                    <img className="house-image" src="images/homes/home1.jpg" alt=""/>
                    <div className="house-head">
                      <h3 className="house-address">123th Some Address, City name</h3>
                      <div className="house-type-map">
                        <span>Penthouse</span>
                        <span>
                    <i className="fas fa-map-marker" aria-hidden="true"></i>
                    Show on map
                  </span>
                      </div>
                    </div>
                    <div className="house-details">
                      <div className="house-details-item">
                        <span className="house-details-item-title">Floor</span>
                        <div className="house-details-item-info">
                          <img src="images/search/elevator.svg" alt=""/>
                          <span>3</span>
                        </div>
                      </div>
                      <div className="house-details-item">
                        <span className="house-details-item-title">Rooms</span>
                        <div className="house-details-item-info">
                          <img src="images/search/double-bed.svg" alt=""/>
                          <span>4</span>
                        </div>
                      </div>
                      <div className="house-details-item">
                        <span className="house-details-item-title">Size <small>(m<sup>2</sup>)</small></span>
                        <div className="house-details-item-info">
                          <img src="images/search/house-size.svg" alt=""/>
                          <span>320</span>
                        </div>
                      </div>
                      <div className="house-details-item">
                        <span className="house-details-item-title">Entry</span>
                        <div className="house-details-item-info">
                          <img src="images/search/calendar.svg" alt=""/>
                          <span>22/22</span>
                        </div>
                      </div>
                    </div>
                    <div className="house-description">
                      <strong>Description:</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                      asperiores consequatur deserunt dicta eaque.
                    </div>
                  </div>
                  <div className="house-foot">
                    <div className="house-price">
                      <span className="house-price-title">For rent</span>
                      <div>
                        $4,000
                        <span className="house-rent"> / month</span>
                      </div>
                    </div>
                    <button className="btn btn-more-info">View Property</button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-3">
                <div className="house-box">
                  <div>
                    <img className="house-image" src="images/homes/home1.jpg" alt=""/>
                    <div className="house-head">
                      <h3 className="house-address">123th Some Address, City name</h3>
                      <div className="house-type-map">
                        <span>Penthouse</span>
                        <span>
                    <i className="fas fa-map-marker" aria-hidden="true"></i>
                    Show on map
                  </span>
                      </div>
                    </div>
                    <div className="house-details">
                      <div className="house-details-item">
                        <span className="house-details-item-title">Floor</span>
                        <div className="house-details-item-info">
                          <img src="images/search/elevator.svg" alt=""/>
                          <span>3</span>
                        </div>
                      </div>
                      <div className="house-details-item">
                        <span className="house-details-item-title">Rooms</span>
                        <div className="house-details-item-info">
                          <img src="images/search/double-bed.svg" alt=""/>
                          <span>4</span>
                        </div>
                      </div>
                      <div className="house-details-item">
                        <span className="house-details-item-title">Size <small>(m<sup>2</sup>)</small></span>
                        <div className="house-details-item-info">
                          <img src="images/search/house-size.svg" alt=""/>
                          <span>320</span>
                        </div>
                      </div>
                      <div className="house-details-item">
                        <span className="house-details-item-title">Entry</span>
                        <div className="house-details-item-info">
                          <img src="images/search/calendar.svg" alt=""/>
                          <span>22/22</span>
                        </div>
                      </div>
                    </div>
                    <div className="house-description">
                      <strong>Description:</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                      asperiores consequatur deserunt dicta eaque, earum exercitationem explicabo hic labore nulla
                      numquam obcaecati odio quas, rem saepe ut voluptatem. Explicabo, placeat?
                    </div>
                  </div>
                  <div className="house-foot">
                    <div className="house-price">
                      <span className="house-price-title">For rent</span>
                      <div>
                        $4,000
                        <span className="house-rent"> / month</span>
                      </div>
                    </div>
                    <button className="btn btn-more-info">View Property</button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-3">
                <div className="house-box">
                  <div>
                    <img className="house-image" src="images/homes/home1.jpg" alt=""/>
                    <div className="house-head">
                      <h3 className="house-address">123th Some Address, City name</h3>
                      <div className="house-type-map">
                        <span>Penthouse</span>
                        <span>
                    <i className="fas fa-map-marker" aria-hidden="true"></i>
                    Show on map
                  </span>
                      </div>
                    </div>
                    <div className="house-details">
                      <div className="house-details-item">
                        <span className="house-details-item-title">Floor</span>
                        <div className="house-details-item-info">
                          <img src="images/search/elevator.svg" alt=""/>
                          <span>3</span>
                        </div>
                      </div>
                      <div className="house-details-item">
                        <span className="house-details-item-title">Rooms</span>
                        <div className="house-details-item-info">
                          <img src="images/search/double-bed.svg" alt=""/>
                          <span>4</span>
                        </div>
                      </div>
                      <div className="house-details-item">
                        <span className="house-details-item-title">Size <small>(m<sup>2</sup>)</small></span>
                        <div className="house-details-item-info">
                          <img src="images/search/house-size.svg" alt=""/>
                          <span>320</span>
                        </div>
                      </div>
                      <div className="house-details-item">
                        <span className="house-details-item-title">Entry</span>
                        <div className="house-details-item-info">
                          <img src="images/search/calendar.svg" alt=""/>
                          <span>22/22</span>
                        </div>
                      </div>
                    </div>
                    <div className="house-description">
                      <strong>Description:</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                      asperiores consequatur deserunt dicta eaque.
                    </div>
                  </div>
                  <div className="house-foot">
                    <div className="house-price">
                      <span className="house-price-title">For rent</span>
                      <div>
                        $4,000
                        <span className="house-rent"> / month</span>
                      </div>
                    </div>
                    <button className="btn btn-more-info">View Property</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br /><br /><br /><br /><br />
        <Footer />
      </div>
    );
  }
}

export default SearchPage;