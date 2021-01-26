import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AgentMessagesPage from "../pages/agents/AgentMessagesPage";
import AgentCalendarPage from "../pages/agents/AgentCalendarPage";
import AgentPropertiesPage from "../pages/agents/AgentPropertiesPage";
import AgentDashboardPage from "../pages/agents/AgentDashboardPage";
import AgentNavbar from "../components/header/AgentNavbar";

class AgentsRoutes extends React.Component {
  render() {
    if (!this.props.user) {
      return <Redirect to="/login" />
    }
    return (
      <div>
        <AgentNavbar user={this.props.user} logout={this.props.logout}  />
        <Switch>
          <Route path="/agents/messages">
            <AgentMessagesPage user={this.props.user} />
          </Route>
          <Route path="/agents/calendar">
            <AgentCalendarPage user={this.props.user} />
          </Route>
          <Route path="/agents/properties">
            <AgentPropertiesPage user={this.props.user} />
          </Route>
          <Route path="/agents/dashboard">
            <AgentDashboardPage user={this.props.user} />
          </Route>
        </Switch>
      </div>
    )
  }
}

export default AgentsRoutes;