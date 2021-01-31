import React from "react";
import SectionHeading from "../headings/SectionHeading";
import QuoteBubble from "./QuoteBubble";

class TestimonialsSection extends React.Component {
  render() {
    const quotes = this.props.data.map((quote) => {
      return <QuoteBubble key={quote.id} bubble={quote} />
    });
    return (
      <section className="section">
        <div className="container">
          <SectionHeading title="Testimonials" slogan="We say we are the best, but don't take our word for that, check out what our
              clients say about us." />
          <div className="row testimonials-list">
            {quotes}
          </div>
        </div>
      </section>
    );
  }
}

export default TestimonialsSection;