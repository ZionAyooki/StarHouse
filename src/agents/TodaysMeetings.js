import React from "react";
import TodaysMeetingsItem from "./TodaysMeetingsItem";

class TodaysMeetings extends React.Component {
  render() {
    const meetings = this.props.list.map((meeting) => {
      return <TodaysMeetingsItem key={meeting.id} meeting={meeting} />;
    });
    return (
      <div className="accordion " id="today-meetings">
        {meetings.length > 0 ? meetings : <p>There are no meetings today.</p>}
      </div>
    );
  }
}

export default TodaysMeetings;