import React from "react";
import moment from "moment";
import CalendarTR from "../../agents/CalendarTR";
import NewMeetingForm from "../../components/forms/NewMeetingForm";

class AgentCalendarPage extends React.Component {
  constructor(props) {
    super(props);

    this.modalCloseBtn = React.createRef();

    this.state = {
      myMeetings: this.props.allMeetings.filter((meeting) => {
        return meeting.agentId === this.props.activeUser.id;
      }),
      editMeeting: null,
      editMeetingId: 0,
      isShowModal: false,
      currentMonth: moment().startOf('month')
    };
  }

  nextMonth = () => {
    this.setState((prevState) => ({
      currentMonth: moment(prevState.currentMonth).add(1, 'month').startOf('month')
    }));
  }
  prevMonth = () => {
    this.setState((prevState) => ({
      currentMonth: moment(prevState.currentMonth).subtract(1, 'month').startOf('month')
    }));
  }

  meetingAdd = (meetingObj) => {
    const newMeeting = {
      ...meetingObj,
      id: this.props.getNewId('meeting'),
      agentId: this.props.activeUser.id,
      createdAt: moment().format('YYYY-MM-DD')
    };
    this.setState((prevState) => ({
      myMeetings: [...prevState.myMeetings, newMeeting],
      editMeeting: null
    }));
    this.props.meetingAdd(newMeeting);
    this.modalCloseBtn.current.click();
  }

  meetingEdit = (meetingObj) => {
    this.setState((prevState) => {
      const filteredMeetings = prevState.myMeetings.map((meeting) => {
        if (meeting.id === meetingObj.id) { return meetingObj; }
        return meeting;
      });
      return {
        myMeetings: filteredMeetings,
        editMeeting: null
      };
    });
    this.props.meetingEdit(meetingObj.id, meetingObj);
    this.modalCloseBtn.current.click();
  }

  removeMeeting = (meetingId) => {
    const sure = window.confirm('Are you sure you want to delete this house?');
    if (sure) {
      this.setState((prevState) => ({
        myMeetings: prevState.myMeetings.filter((meeting) => {
          return meetingId !== meeting.id
        })
      }));
    }
    this.props.meetingRemove(meetingId);
  }

  openModal = (meetingObj) => {
    this.setState(() => ({
      editMeeting: meetingObj,
      editMeetingId: this.props.getNewId('random'),
      isShowModal: true
    }));
  }
  closeModal = () => {
    this.setState(() => ({
      editMeeting: null,
      editMeetingId: 0,
      isShowModal: false
    }));
  }

  createCalendar = () => {
    const calendar = [];
    const startOfMonth = this.state.currentMonth.startOf('month');
    const startDate = moment(startOfMonth).subtract(startOfMonth.day(), 'day');
    const totalDays = startOfMonth.day() + startOfMonth.daysInMonth() + (6 - startOfMonth.endOf('month').day());

    for (let weekNum = 0; weekNum < Math.floor(totalDays / 7); weekNum++) {
      const weekCalendar = [];
      for (let dayNum = 0; dayNum <= 6; dayNum++) {
        const currentDate = moment(startDate).add((weekNum*7)+dayNum, 'day').format('YYYY-MM-DD');
        const currentDayMeetings = {
          date: currentDate,
          meetings: this.state.myMeetings.filter((meeting) => {
            return meeting.date === currentDate;
          }).sort((a,b) => {
            return moment(a.date+"T"+a.time).isAfter(moment(b.date+"T"+b.time)) ? 1 : -1;
          })
        }
        weekCalendar.push(currentDayMeetings);
      }
      calendar.push(weekCalendar);
    }
    return calendar;
  }

  render() {
    const calendar = this.createCalendar();
    const calendarJSX = calendar.map((week, index) => {
      return (
        <CalendarTR
          key={week[0].date} week={week} currentMonth={this.state.currentMonth}
          meetingEdit={this.meetingEdit} openModal={this.openModal} removeMeeting={this.removeMeeting}
        />
      );
    });
    return (
      <main>
        <section className="section">
          <div className="container">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h1>My Calendar</h1>
              <button
                type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#meeting-modal"
                onClick={() => this.openModal(null)}
              >
                Add new meeting
              </button>
            </div>
            <div className="d-flex align-items-center justify-content-center py-3">
              <button className="btn btn-outline-dark" aria-label="Previous Month" onClick={this.prevMonth}>&lt; &lt;</button>
              <span className="calendar-month">{this.state.currentMonth.format('MMMM YYYY')}</span>
              <button className="btn btn-outline-dark" aria-label="Next Month" onClick={this.nextMonth}>&gt; &gt;</button>
            </div>
            <div className="row">
              <table className="table table-responsive table-bordered border-secondary">
                <thead className="text-center">
                  <tr className="calendar-week-header">
                    <th scope="column">Sunday</th>
                    <th scope="column">Monday</th>
                    <th scope="column">Tuesday</th>
                    <th scope="column">Wednesday</th>
                    <th scope="column">Thursday</th>
                    <th scope="column">Friday</th>
                    <th scope="column">Saturday</th>
                  </tr>
                </thead>
                <tbody>
                  {calendarJSX}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <div className={`modal fade ${this.state.isShowModal ? 'show' : ''}`} id="meeting-modal" tabIndex="-1" aria-labelledby="meeting-modal-label" aria-hidden={!this.state.isShowModal}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="meeting-modal-label">{this.state.editMeeting ? 'Edit Meeting' : 'New Meeting'}</h5>
                <button
                  ref={this.modalCloseBtn} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                  onClick={this.closeModal}
                ></button>
              </div>
              <div className="modal-body">
                <NewMeetingForm
                  meetingAdd={this.meetingAdd} meetingEdit={this.meetingEdit} meeting={this.state.editMeeting}
                  key={this.state.editMeetingId}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default AgentCalendarPage;