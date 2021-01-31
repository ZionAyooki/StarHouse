import React from "react";
import HeroHeading from "../components/headings/HeroHeading";
import ContactForm from "../components/forms/ContactForm";
import SectionHeading from "../components/headings/SectionHeading";
import ThankYouContact from "../components/forms/ThankYouContact";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formSubmitted: false
    };
  }

  messageAdd = (messageObj) => {
    this.setState({
      formSubmitted: true
    });
    this.props.messageAdd(messageObj);
  }

  render() {
    return (
      <main>
        <HeroHeading title="Contact us" slogan="We are here for you, feel free to write us" />
        <section className="section">
          <div className="container">
            <SectionHeading title="Get in touch" slogan="You can fill out the form or contact us on email, phone or letters." />
            <div className="row align-items-start justify-content-evenly">
              <div className="col-12 col-lg-8">
                {this.state.formSubmitted && <ThankYouContact />}
                {!this.state.formSubmitted && <ContactForm allAgents={this.props.allAgents} messageAdd={this.messageAdd} /> }
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
        </section>
      </main>
    );
  }
}

export default ContactPage;