import React from "react";

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nlEmail: ''
    };
  }

  handleChange = (e) => {
    this.setState(() => ({
      [e.target.name]: e.target.value
    }));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState(() => ({
      nlEmail: ''
    }));
  }

  render() {
    return (
      <form id="newsletter-form" className="col-12 col-md-9 col-lg-6" onSubmit={this.handleSubmit}>
        <div className="input-group input-group-lg mb-2">
          <label htmlFor="newsletter-email" className="visually-hidden">Subscription email</label>
          <input
            id="newsletter-email" className="form-control" type="email" name="nlEmail" placeholder="Email address" required
            value={this.state.nlEmail} onChange={this.handleChange}
          />
          <button className="btn btn-success px-md-5" type="submit">Subscribe</button>
        </div>
      </form>
    );
  }
}

export default NewsletterForm;