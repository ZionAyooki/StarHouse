import React from "react";
import SectionHeading from "../headings/SectionHeading";
import {data} from "../../data/fakeData";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      phone: '',
      to: '1',
      msg: ''
    }
  }

  handleChangeValue = (e) => {
    const key = e.target.getAttribute('data-field');
    const newVal = e.target.value;
    this.setState({
      [key]: newVal
    });
  }

  handleRecipient = (e) => {
    const newVal = e.target.value;
    this.setState({
      to: newVal
    });
  }

  render() {
    const toOptions = data.agents.map((item) => {
      return <option key={item.id} value={item.id}>{item.name}</option>
    });
    return (
      <div className="container">
        <SectionHeading title="Get in touch" slogan="You can fill out the form or contact us on email, phone or letters." />
        <div className="row align-items-start justify-content-evenly">
          <div className="col-12 col-lg-8">
            <form id="contact-form" className="container-fluid" onSubmit={(e) => e.preventDefault()}>
              <div className="row">
                <div className="col-12 col-lg-6 mb-2">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    id="name" type="text" className="form-control" data-field="name"
                    value={this.state.name} onChange={this.handleChangeValue}
                  />
                </div>
                <div className="col-12 col-lg-6 mb-2">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    id="email" type="email" className="form-control" data-field="email"
                    value={this.state.email} onChange={this.handleChangeValue}
                  />
                </div>
                <div className="col-12 col-lg-6 mb-2">
                  <label htmlFor="phone" className="form-label">Phone</label>
                  <input
                    id="phone" type="text" className="form-control" data-field="phone"
                    value={this.state.phone} onChange={this.handleChangeValue}
                  />
                </div>
                <div className="col-12 col-lg-6 mb-2">
                  <label htmlFor="to" className="form-label">Recipient</label>
                  <select id="to" className="form-select" defaultValue={this.state.to} onChange={this.handleRecipient}>
                    {toOptions}
                  </select>
                </div>
                <div className="col-12 mb-2">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="6" data-field="msg" value={this.state.msg} onChange={this.handleChangeValue} />
                </div>
                <div className="col-12 text-center mb-2">
                  <button type="submit" className="btn btn-search">Submit</button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-12 col-lg-4">
            <h3 className="contact-subheading">Contact info</h3>
            <div className="d-flex flex-column p-1">
              <a className="contact-link" href="mailto:example@email.com">
                <i className="fas fa-envelope" aria-hidden="true"></i>
                <span>example@email.com</span>
              </a>
              <a className="contact-link" href="tel:031234567">
                <i className="fas fa-phone-alt" aria-hidden="true"></i>
                <span>03-1234567</span>
              </a>
              <div className="contact-text">
                <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                <div>
                  <div>123rd Default Street,</div>
                  <div>Tel Aviv</div>
                </div>
              </div>
              <div className="contact-text">
                <i className="fas fa-clock" aria-hidden="true"></i>
                <div>
                  <div>Sunday - Thursday:</div>
                  <div className="ps-3">08:00 - 17:00</div>
                  <div>Friday:</div>
                  <div className="ps-3">08:00 - 13:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactForm;