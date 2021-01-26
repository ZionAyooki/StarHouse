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
import AgentNavbar from "./components/header/AgentNavbar";
import AgentDashboardPage from "./pages/agents/AgentDashboardPage";
import AgentPropertiesPage from "./pages/agents/AgentPropertiesPage";
import AgentCalendarPage from "./pages/agents/AgentCalendarPage";
import AgentMessagesPage from "./pages/agents/AgentMessagesPage";
import HousePage from "./pages/HousePage";
import houseList from "./data/houses.json";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/agents">
            <AgentNavbar />
          </Route>
          <Route path="/">
            <Header />
          </Route>
        </Switch>
        <Switch>
          <Route path="/agents/messages">
            <AgentMessagesPage />
          </Route>
          <Route path="/agents/calendar">
            <AgentCalendarPage />
          </Route>
          <Route path="/agents/properties">
            <AgentPropertiesPage />
          </Route>
          <Route path="/agents/dashboard">
            <AgentDashboardPage />
          </Route>
          <Route path="/login">
            <LoginPage />
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
