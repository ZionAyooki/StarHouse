import React from "react";

class TodaysMeetingsItem extends React.Component {
  render() {
    const { id, time, place, description } = this.props.meeting;
    const withWho = this.props.meeting.with;
    return (
      <div className="accordion-item">
        <h3 className="accordion-header" id={`today-meetings-head-${id}`}>
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target={`#today-meetings-body-${id}`} aria-expanded="false" aria-controls={`today-meetings-body-${id}`}>
            {time} - {withWho}
          </button>
        </h3>
        <div id={`today-meetings-body-${id}`} className="accordion-collapse collapse" aria-labelledby={`today-meetings-head-${id}`}
             data-bs-parent="#today-meetings">
          <div className="accordion-body">
            <p><strong>Meeting place:</strong> {place}</p>
            <p><strong>Meeting info: </strong> {description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default TodaysMeetingsItem;