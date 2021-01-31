import React from "react";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      phone: '',
      agentId: 1,
      subject: '',
      msg: ''
    }
  }

  handleChangeValue = (e) => {
    this.setState(() => ({
      [e.target.name]: e.target.value
    }));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const messageObj = { ...this.state };
    this.props.messageAdd(messageObj);
  }

  render() {
    const recipients = this.props.allAgents.map((agent) => {
      return <option key={agent.id} value={agent.id}>{agent.name}</option>
    });
    return (
      <form id="contact-form" className="container" onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col-12 col-lg-6 mb-2">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              id="name" type="text" className="form-control" name="name"
              value={this.state.name} onChange={this.handleChangeValue}
            />
          </div>
          <div className="col-12 col-lg-6 mb-2">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              id="email" type="email" className="form-control" name="email"
              value={this.state.email} onChange={this.handleChangeValue}
            />
          </div>
          <div className="col-12 col-lg-6 mb-2">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input
              id="phone" type="text" className="form-control" name="phone"
              value={this.state.phone} onChange={this.handleChangeValue}
            />
          </div>
          <div className="col-12 col-lg-6 mb-2">
            <label htmlFor="recipient" className="form-label">Recipient</label>
            <select
              id="recipient" className="form-select" name="agentId"
              defaultValue={this.state.agentId} onChange={this.handleChangeValue}
            >
              {recipients}
            </select>
          </div>
          <div className="col-12 mb-2">
            <label htmlFor="subject" className="form-label">Subject</label>
            <input
              id="subject" type="text" className="form-control" name="subject"
              value={this.state.subject} onChange={this.handleChangeValue}
            />
          </div>
          <div className="col-12 mb-2">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message" className="form-control" rows="6" name="msg"
              value={this.state.msg} onChange={this.handleChangeValue}
            />
          </div>
          <div className="col-12 text-center mb-2">
            <button type="submit" className="btn btn-search">Submit</button>
          </div>
        </div>
      </form>
    );
  }
}

export default ContactForm;