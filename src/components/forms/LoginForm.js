import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = (e) => {
    this.setState(() => ({
      [e.target.name]: e.target.value
    }));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.isValidLogin(this.state.username, this.state.password)) {
      this.props.handleLogin(this.state.username, this.state.password);
    }
  }

  render() {
    return (
      <form id="agent-login" onSubmit={this.handleSubmit}>
        <div className="input-group mb-3">
          <label htmlFor="agent-user" className="input-group-text">
            <i className="fas fa-user" aria-hidden="true"></i>
            <span className="visually-hidden">Email</span>
          </label>
          <input
            id="agent-user" type="email" className="form-control" placeholder="username" name="username"
            value={this.state.username} onChange={this.handleChange}
          />
        </div>
        <div className="input-group mb-3">
          <label htmlFor="agent-pass" className="input-group-text">
            <i className="fas fa-lock" aria-hidden="true"></i>
            <span className="visually-hidden">Password</span>
          </label>
          <input
            id="agent-pass" type="password" className="form-control" placeholder="Password" name="password"
            value={this.state.password} onChange={this.handleChange}
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">Login</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;