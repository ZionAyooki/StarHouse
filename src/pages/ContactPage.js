import React from "react";
import HeroHeading from "../components/headings/HeroHeading";
import ContactForm from "../components/forms/ContactForm";

class ContactPage extends React.Component {
  render() {
    return (
      <main>
        <HeroHeading isLarge={false} title="Contact us" slogan="We are here for you, feel free to write us" />
        <br /><br /><br /><br /><br />
        <ContactForm />
        <br /><br /><br /><br /><br />
      </main>
    );
  }
}

export default ContactPage;