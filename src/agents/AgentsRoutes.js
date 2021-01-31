import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AgentMessagesPage from "../pages/agents/AgentMessagesPage";
import AgentCalendarPage from "../pages/agents/AgentCalendarPage";
import AgentPropertiesPage from "../pages/agents/AgentPropertiesPage";
import AgentDashboardPage from "../pages/agents/AgentDashboardPage";
import AgentNavbar from "../components/header/AgentNavbar";

class AgentsRoutes extends React.Component {
  render() {
    if (!this.props.activeUser) {
      return <Redirect to="/login" />
    }
    return (
      <div>
        <AgentNavbar activeUser={this.props.activeUser} handleLogout={this.props.handleLogout} siteDetails={this.props.siteDetails} />
        <Switch>
          <Route path="/agents/messages">
            <AgentMessagesPage
              activeUser={this.props.activeUser} allMessages={this.props.allMessages} messageRemove={this.props.messageRemove}
              messageForward={this.props.messageForward} toggleRead={this.props.toggleRead} getMessage={this.props.getMessage}
            />
          </Route>
          <Route path="/agents/calendar">
            <AgentCalendarPage
              activeUser={this.props.activeUser} allMeetings={this.props.allMeetings}
              meetingAdd={this.props.meetingAdd} meetingRemove={this.props.meetingRemove} meetingEdit={this.props.meetingEdit}
              getMeeting={this.props.getMeeting} getNewId={this.props.getNewId}
            />
          </Route>
          <Route path="/agents/properties">
            <AgentPropertiesPage
              activeUser={this.props.activeUser} categories={this.props.categories} allHouses={this.props.allHouses}
              houseAdd={this.props.houseAdd} houseRemove={this.props.houseRemove} houseEdit={this.props.houseEdit}
              getHouse={this.props.getHouse} getCityById={this.props.getCityById} getNewId={this.props.getNewId}
              toggleDeal={this.props.toggleDeal}
            />
          </Route>
          <Route path="/agents/dashboard">
            <AgentDashboardPage
              activeUser={this.props.activeUser}
              allHouses={this.props.allHouses} allMeetings={this.props.allMeetings} allMessages={this.props.allMessages}
            />
          </Route>
        </Switch>
      </div>
    )
  }
}

export default AgentsRoutes;