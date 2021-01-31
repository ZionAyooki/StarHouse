import React from "react";
import SectionHeading from "../headings/SectionHeading";
import Tiles from "../uicomponents/tiles/Tiles";

class WhyUsSection extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="container text-center">
          <SectionHeading title="Why Us" slogan="Let us tell you why you should choose us over other companies" />
          <Tiles list={this.props.data} />
        </div>
      </section>
    );
  }
}

export default WhyUsSection;