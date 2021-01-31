import React from "react";
import SectionHeading from "../headings/SectionHeading";
import Cubes from "../uicomponents/cubes/Cubes";

class ServicesSection extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <SectionHeading title="Our services" slogan="We are specialized in real estate. Here are some of our services." />
          <Cubes list={this.props.data.filter(item => item.showOnHomepage)} />
        </div>
      </section>
    );
  }
}

export default ServicesSection;