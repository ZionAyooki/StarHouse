import React from "react";
import {HashRouter, Switch, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import SearchPage from "./pages/SearchPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import LoginPage from "./pages/LoginPage";
import HousePage from "./pages/HousePage";
import houseList from "./data/houses.json";
import AgentsRoutes from "./agents/AgentsRoutes";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeUser: null
    };
  }

  loginUser = (userObj) => {
    this.setState({
      activeUser: userObj
    });
    window.location = "/#/agents/dashboard";
  }

  logoutUser = () => {
    this.setState({
      activeUser: null
    });
  }

  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/agents">
            <AgentsRoutes user={this.state.activeUser} login={this.loginUser} logout={this.logoutUser} />
          </Route>
          <Route path="/">
            <Header />
          </Route>
        </Switch>
        <Switch>
          <Route path="/login">
            <LoginPage user={this.state.activeUser} login={this.loginUser} />
          </Route>
          <Route path="/search/:id">
            <HousePage />
          </Route>
          <Route path="/search">
            <SearchPage houseList={houseList} />
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
