import React from "react";

class AgentPropertyRow extends React.Component {
  render() {
    const { house, city, houseType, dealType } = this.props;
    return (
      <tr>
        <td>{house.address}, {city}</td>
        <td>{houseType}</td>
        <td>{dealType}</td>
        <td>{house.rooms}</td>
        <td>{house.floor}</td>
        <td>${house.price}</td>
        <td>
          <span role="button"
            className={`deal-status-cell ${house.closedAt ? 'text-success' : 'text-danger'}`}
            onClick={() => this.props.toggleDeal(house.id)}
          >
            {
              house.closedAt ?
                <i className="fas fa-thumbs-up" aria-hidden={true}></i> :
                <i className="fas fa-thumbs-down" aria-hidden={true}></i>
            }
          </span>
        </td>
        <td>
          <button
            type="button" className="btn btn-link text-primary me-3" data-bs-toggle="modal" data-bs-target="#house-modal"
            onClick={() => this.props.openModal(house)}
          >
            <i className="fas fa-edit" aria-hidden={true}></i> Edit
          </button>
          <button
            type="button" className="btn btn-link text-danger me-3" onClick={() => this.props.removeHouse(house.id)}
          >
            <i className="fas fa-trash-alt" aria-hidden={true}></i> Remove
          </button>
        </td>
      </tr>
    );
  }
}

export default AgentPropertyRow;