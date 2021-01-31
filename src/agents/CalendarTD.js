import React from "react";
import moment from "moment";

class CalendarTD extends React.Component {
  render() {
    const { currentMonth } = this.props;
    const { date, meetings } = this.props.day;
    const meetingsList = meetings.map((meeting) => {
      return (
        <div key={meeting.id} className="calendar-meeting">
          <div className="calendar-meeting-time">
            <span>{meeting.time}</span>
            <div className="calendar-meeting-buttons">
              <span role="button" className="text-primary me-1" data-bs-toggle="modal" data-bs-target="#meeting-modal"
                onClick={() => this.props.openModal(meeting)} aria-label="edit meeting"
              >
                <i className="fas fa-edit" aria-hidden={true}></i>
              </span>
              <span role="button" className="text-danger me-1" aria-label="remove meeting"
                onClick={() => this.props.removeMeeting(meeting.id)}
              >
                <i className="fas fa-trash-alt" aria-hidden={true}></i>
              </span>
            </div>
          </div>
          <span className="calendar-meeting-with">{meeting.with}</span>
        </div>
      );
    });
    return (
      <td className={`calendar-day${moment(date).isBefore(moment(currentMonth).startOf('month')) ? ' prev-month' : ''}${moment(date).isBefore(moment().startOf('day')) ? ' overdue' : ''}${moment(date).isAfter(moment(currentMonth).endOf('month')) ? ' next-month' : ''}`}>
        <div className="calendar-day-header">
          <span>{moment(date).format('MMM Do')}</span>
        </div>
        <div className="calendar-meetings-list">
          {meetingsList}
        </div>
      </td>
    );
  }
}

export default CalendarTD;