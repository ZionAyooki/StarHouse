import React from "react";
import HeroHeading from "../components/headings/HeroHeading";

class NotFoundPage extends React.Component {
  render() {
    return (
      <main className="page-not-found">
        <HeroHeading isLarge={true} title="Oops! Page not found!" slogan="Sorry. We can't serve what we don't have" />
      </main>
    );
  }
}

export default NotFoundPage;