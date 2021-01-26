import React from "react";
import SectionHeading from "../headings/SectionHeading";
import NewsletterForm from "../forms/NewsletterForm";

class NewsletterSection extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <SectionHeading title="Newsletter" slogan="Our newsletter contains information for home owners and residents. Subscription is free." />
          <div className="row justify-content-center">
            <NewsletterForm />
          </div>
        </div>
      </section>
    );
  }
}

export default NewsletterSection;