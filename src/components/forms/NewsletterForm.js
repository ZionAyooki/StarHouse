import React from "react";

class NewsletterForm extends React.Component {
  render() {
    return (
      <form id="newsletter-form" className="col-12 col-md-9 col-lg-6">
        <div className="input-group input-group-lg mb-2">
          <label htmlFor="newsletter-email" className="visually-hidden">Subscription email</label>
          <input id="newsletter-email" className="form-control" type="email" placeholder="Email address" />
          <button className="btn btn-success px-md-5" type="button">Subscribe</button>
        </div>
      </form>
    );
  }
}

export default NewsletterForm;