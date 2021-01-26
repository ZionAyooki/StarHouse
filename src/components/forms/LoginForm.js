import React from "react";
import AgentsData from "../../data/agents.json";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = (e) => {
    const newVal = e.target.value;
    const key = e.target.getAttribute('data-name');
    this.setState({
      [key]: newVal
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const userObj = AgentsData.find(user => user.email === this.state.username);
    if (userObj && userObj.password === this.state.password) {
      this.props.login(userObj);
    }
  }

  render() {
    return (
      <form id="agent-login" onSubmit={this.handleSubmit}>
        <div className="input-group mb-3">
          <label htmlFor="agent-user" className="input-group-text">
            <i className="fas fa-user" aria-hidden="true"></i>
            <span className="visually-hidden">Username</span>
          </label>
          <input
            id="agent-user" type="email" className="form-control" placeholder="Username" data-name="username"
            value={this.state.username} onChange={this.handleChange}
          />
        </div>
        <div className="input-group mb-3">
          <label htmlFor="agent-pass" className="input-group-text">
            <i className="fas fa-lock" aria-hidden="true"></i>
            <span className="visually-hidden">Password</span>
          </label>
          <input
            id="agent-pass" type="password" className="form-control" placeholder="Password" data-name="password"
            value={this.state.password} onChange={this.handleChange}
          />
        </div>
        {/*<div className="mb-3 form-check">*/}
        {/*  <label className="form-check-label">*/}
        {/*    <input type="checkbox" className="form-check-input" id="agent-remember"/>*/}
        {/*    Remember me*/}
        {/*  </label>*/}
        {/*</div>*/}
        <div className="text-center">
          <button type="submit" className="btn btn-primary">Login</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;