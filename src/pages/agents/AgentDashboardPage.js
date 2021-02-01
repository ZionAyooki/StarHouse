import React from "react";
import moment from "moment";
import HeroHeading from "../../components/headings/HeroHeading";
import SectionHeading from "../../components/headings/SectionHeading";
import TodaysMeetings from "../../agents/TodaysMeetings";

class AgentDashboardPage extends React.Component {
  render() {
    const myHouses = this.props.allHouses.filter(house => house.agentId === this.props.activeUser.id);
    const monthlyAddedHouses = myHouses.filter(house => moment(house.createdAt).startOf('month').isSame(moment().startOf('month'))).length;
    const monthlyClosedDeals = myHouses.filter(house => house.closedAt && moment(house.closedAt).startOf('month').isSame(moment().startOf('month'))).length;
    const totalActive = myHouses.filter(house => !house.closedAt).length;
    const todayMeetings = this.props.allMeetings.filter(meeting => meeting.agentId === this.props.activeUser.id && meeting.date === moment().format('YYYY-MM-DD')).sort((a,b) => {
      return moment(a.date + ' ' + a.time).isBefore(moment(b.date + ' ' + b.time)) ? -1 : 1;
    });
    const myMessages = this.props.allMessages.filter(message => message.agentId === this.props.activeUser.id);
    const totalNewMessages = myMessages.filter(message => message.markRead === false).length;
    return (
      <main>
        <HeroHeading title={`Hello ${this.props.activeUser.name}`} slogan="Welcome to your dashboard" />
        <section className="section">
          <div className="container">
            <div className="row justify-content-evenly">
              <div className="col-12 col-sm-3 mb-4">
                <SectionHeading title="Your Messages" />
                <div className="d-flex flex-column">
                  <p><strong>New messages:</strong> {totalNewMessages}</p>
                  <p><strong>Total inbox:</strong> {myMessages.length}</p>
                </div>
              </div>
              <div className="col-12 col-sm-6 mb-4">
                <SectionHeading title="Today's meetings" />
                <TodaysMeetings list={todayMeetings} />
              </div>
              <div className="col-12 col-sm-3 mb-4">
                <SectionHeading title="Your properties" />
                <div className="d-flex flex-column">
                  <p><strong>Monthly added:</strong> {monthlyAddedHouses}</p>
                  <p><strong>Monthly closed:</strong> {monthlyClosedDeals}</p>
                  <p><strong>Total active:</strong> {totalActive}</p>
                  <p><strong>Total listings:</strong> {myHouses.length}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default AgentDashboardPage;