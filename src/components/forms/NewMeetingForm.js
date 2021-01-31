import React from "react";
import moment from "moment";

class NewMeetingForm extends React.Component {
  constructor(props) {
    super(props);

    this.resetState = {
      date: moment().format('YYYY-MM-DD'),
      time: moment().format('HH:mm'),
      with: '',
      place: '',
      description: '',
      id: null,
      agentId: null,
      createdAt: null
    }

    this.state = {
      ...(this.props.meeting ? this.props.meeting : this.resetState)
    };
  }

  handleChangeText = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleChangeDate = (e) => {
    this.setState({
      date: moment(e.target.value).format('YYYY-MM-DD')
    });
  }
  handleChangeTime = (e) => {
    const hourMinuteArr = e.target.value.split(':');
    this.setState({
      time: moment().set({'hour': parseInt(hourMinuteArr[0]), 'minute': parseInt(hourMinuteArr[1])}).format('HH:mm')
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newMeeting = {
      ...this.state
    }
    if (this.state.id) {
      this.props.meetingEdit(newMeeting);
    } else {
      this.props.meetingAdd(newMeeting);
    }
    this.setState(() => ({
      ...this.resetState
    }));
  }

  render() {
    return (
      <div className="container">
        <form id="new-meeting-form" onSubmit={this.handleSubmit}>
          <div className="row mx-0 py-3">
            <div className="col-6 mb-2">
              <label htmlFor="date" className="form-label">Date</label>
              <input
                id="date" className="form-control" type="date" name="date"
                value={this.state.date} onChange={this.handleChangeDate}
              />
            </div>
            <div className="col-6 mb-2">
              <label htmlFor="time" className="form-label">Time</label>
              <input
                id="time" className="form-control" type="time" name="time"
                value={this.state.time} onChange={this.handleChangeTime}
              />
            </div>
            <div className="col-12 mb-2">
              <label htmlFor="with" className="form-label">With</label>
              <input
                id="with" className="form-control" type="text" name="with" placeholder="Person name"
                value={this.state.with} onChange={this.handleChangeText}
              />
            </div>
            <div className="col-12 mb-2">
              <label htmlFor="place" className="form-label">Where</label>
              <input
                id="place" className="form-control" type="text" name="place" placeholder="Meeting place"
                value={this.state.place} onChange={this.handleChangeText}
              />
            </div>
            <div className="col-12 mb-2">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea
                id="description" className="form-control" rows={5} name="description"
                value={this.state.description} onChange={this.handleChangeText}
              />
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-block btn-success w-100">Save</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default NewMeetingForm;