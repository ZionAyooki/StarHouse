import React from "react";

class AgentCalendarPage extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>My calendar</h1>
        <button className="btn btn-primary">Add new meeting</button>

        <div className="row">
          <h2>List of meetings</h2>
          <div className="col-12 text-center">
            <button className="btn btn-outline-info">Previous</button>
            <select>
              <option>January</option>
              <option>February</option>
              <option>March</option>
            </select>
            <select>
              <option>2021</option>
              <option>2022</option>
              <option>2023</option>
            </select>
            <button className="btn btn-outline-info">Next</button>
          </div>
          <table className="table table-responsive">
            <thead>
              <tr>
                <th>Sunday</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <h3>January 1st</h3>
                  <ul>
                    <li>12:00 - Bill gates</li>
                    <li>14:00 - John Doe</li>
                  </ul>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <h3>January 1st</h3>
                  <ul>
                    <li>12:00 - Bill gates</li>
                    <li>14:00 - John Doe</li>
                  </ul>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>
                  <h3>January 1st</h3>
                  <ul>
                    <li>12:00 - Bill gates</li>
                    <li>14:00 - John Doe</li>
                  </ul>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <h3>January 1st</h3>
                  <ul>
                    <li>12:00 - Bill gates</li>
                    <li>14:00 - John Doe</li>
                  </ul>
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <h3>January 1st</h3>
                  <ul>
                    <li>12:00 - Bill gates</li>
                    <li>14:00 - John Doe</li>
                  </ul>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default AgentCalendarPage;