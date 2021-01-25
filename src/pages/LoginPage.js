import React from "react";
import LoginForm from "../components/forms/LoginForm";
import HeroHeading from "../components/headings/HeroHeading";

class LoginPage extends React.Component {
  render() {
    return (
      <main>
        <HeroHeading isLarge={false} title="Agent login" />
        <br /><br /><br /><br /><br />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <LoginForm />
            </div>
          </div>
        </div>
        <br /><br /><br /><br /><br />
      </main>
    );
  }
}

export default LoginPage;