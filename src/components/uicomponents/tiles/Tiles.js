import React from "react";
import TileCard from "./TileCard";

class Tiles extends React.Component {
  render() {
    const tileCards = this.props.list.map((item) => {
      return <TileCard key={item.id} item={item} />
    });
    return (
      <div className="row justify-content-center g-3 tiles">
        {tileCards}
      </div>
    );
  }
}

export default Tiles;