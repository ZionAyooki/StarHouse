import React from "react";
import CubeCard from "./CubeCard";

class Cubes extends React.Component {
  render() {
    const cubeCards = this.props.list.map((item) => {
      return <CubeCard key={item.id} item={item} />
    });
    return (
      <div className="row justify-content-between g-3 cubes">
        {cubeCards}
      </div>
    );
  }
}

export default Cubes;