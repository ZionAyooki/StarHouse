import React from "react";

class DealTypeRadio extends React.Component {
  render() {
    const { deal, status, handleChange } = this.props;
    return (
      <div className="deal-type-item">
        <input
          id={`dealType-${deal.name}`} type="radio" name="dealType" value={deal.id}
          checked={status} onChange={handleChange}
        />
        <label htmlFor={`dealType-${deal.name}`}>For {deal.name}</label>
      </div>
    );
  }
}

export default DealTypeRadio;