import React from "react";
import Header from "../components/header/Header";
import HeroHeading from "../components/headings/HeroHeading";
import Footer from "../components/footer/Footer";
import ContactForm from "../components/forms/ContactForm";

class ContactPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <HeroHeading isLarge={false} title="Contact us" slogan="We are here for you, feel free to write us" />
        <br /><br /><br /><br /><br />
        <ContactForm />
        <br /><br /><br /><br /><br />
        <Footer />
      </div>
    );
  }
}

export default ContactPage;