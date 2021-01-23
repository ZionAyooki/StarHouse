import React from "react";
import SectionHeading from "../headings/SectionHeading";
import {data} from "../../data/fakeData";
import QuoteBubble from "./QuoteBubble";

class TestimonialsSection extends React.Component {
  render() {
    const quotes = data.testimonials.map((quote) => {
      return <QuoteBubble key={quote.id} bubble={quote} />
    });
    return (
      <section id="testimonials">
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