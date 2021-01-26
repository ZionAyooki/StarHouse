import React from "react";
import { Redirect } from "react-router-dom";
import LoginForm from "../components/forms/LoginForm";
import HeroHeading from "../components/headings/HeroHeading";

class LoginPage extends React.Component {
  render() {
    if (this.props.user) {
      return <Redirect to="/agents/dashboard" />
    }
    return (
      <main>
        <HeroHeading isLarge={false} title="Agent login" />
        <section className="section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <LoginForm login={this.props.login} />
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default LoginPage;