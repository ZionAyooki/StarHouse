import React from "react";
import SectionHeading from "../headings/SectionHeading";
import TeamCard from "./TeamCard";

class TeamGallery extends React.Component {
  render() {
    const teamCards = this.props.list.map((item) => {
      return <TeamCard key={item.id} agent={item} />
    });
    return (
      <section className="section">
        <div className="container">
          <SectionHeading title="Meet our team" slogan="The best team in real estate business" />
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 justify-content-evenly">
            {teamCards}
          </div>
        </div>
      </section>
    );
  }
}

export default TeamGallery;