import React from "react";

class TeamCard extends React.Component {
  render() {
    const { name, email, phone, profileImg } = this.props.agent;
    return (
      <div className="col">
        <div className="card">
          <img className="card-img-top" src={profileImg} alt={name} />
          <div className="card-body">
            <h3 className="card-title">{name}</h3>
            <div className="d-flex flex-column">
              <p><strong>Email:</strong> {email}</p>
              <p><strong>Phone:</strong> {phone}</p>
            </div>
          </div>
          <div className="card-footer text-center">
            <small className="text-muted">Social icons links here</small>
          </div>
        </div>
      </div>
    );
  }
}

export default TeamCard;