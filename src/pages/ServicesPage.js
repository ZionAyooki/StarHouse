import React from "react";
import HeroHeading from "../components/headings/HeroHeading";
import SectionHeading from "../components/headings/SectionHeading";

class ServicesPage extends React.Component {
  render() {
    const servicesSections = this.props.services.map((service) => {
      return (
        <section key={service.id} className="section service-section">
          <div className="container">
            <SectionHeading title={service.title} slogan={service.slogan} />
            <div className="row service-details">
              <div className="col-12 col-md-6 mb-2 service-image">
                <img className="img-fluid" src={service.imgUrl} alt="" />
              </div>
              <div className="col-12 col-md-6 mb-2">
                <p>{service.description}</p>
              </div>
            </div>
          </div>
        </section>
      );
    });
    return (
      <div>
        <HeroHeading title="Services" slogan="Here is a list of the services we provide to our clients." />
        {servicesSections}
      </div>
    );
  }
}

export default ServicesPage;