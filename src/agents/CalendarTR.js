import React from "react";
import CalendarTD from "./CalendarTD";

class CalendarTR extends React.Component {
  render() {
    const calendarWeekDays = this.props.week.map((day) => {
      return (
        <CalendarTD
          key={day.date} day={day} currentMonth={this.props.currentMonth}
          meetingEdit={this.props.meetingEdit} openModal={this.props.openModal} removeMeeting={this.props.removeMeeting}
        />
      );
    });
    return (
      <tr>
        {calendarWeekDays}
      </tr>
    );
  }
}

export default CalendarTR;