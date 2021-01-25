import React from "react";
import {HashRouter, Switch, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import SearchPage from "./pages/SearchPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/agents">

          </Route>
          <Route path="/">
            <Header />
          </Route>
        </Switch>
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route exact path="/services">
            <ServicesPage />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route exact path="/contact">
            <ContactPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
        <Footer />
      </HashRouter>
    );
  }
}

export default App;
