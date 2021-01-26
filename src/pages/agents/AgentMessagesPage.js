import React from "react";

class AgentMessagesPage extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>My messages</h1>
        <div className="row">
          <h2>List of msgs</h2>
          <table className="table table-responsive">
            <thead>
              <tr>
                <th>Date</th>
                <th>From</th>
                <th>Subject</th>
                <th>Forward</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>24/01/2021 06:00</td>
                <td>Killer Joe</td>
                <td>New place</td>
                <td>
                  <button>Forward</button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
              <tr>
                <td>24/01/2021 06:00</td>
                <td>Killer Joe</td>
                <td>New place</td>
                <td>
                  <button>Forward</button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
              <tr>
                <td>24/01/2021 06:00</td>
                <td>Killer Joe</td>
                <td>New place</td>
                <td>
                  <button>Forward</button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
              <tr>
                <td>24/01/2021 06:00</td>
                <td>Killer Joe</td>
                <td>New place</td>
                <td>
                  <button>Forward</button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
              <tr>
                <td>24/01/2021 06:00</td>
                <td>Killer Joe</td>
                <td>New place</td>
                <td>
                  <button>Forward</button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              <li className="page-item disabled">
                <a className="page-link" href="/" tabIndex="-1" aria-disabled="true">Previous</a>
              </li>
              <li className="page-item"><a className="page-link" href="/">1</a></li>
              <li className="page-item"><a className="page-link" href="/">2</a></li>
              <li className="page-item"><a className="page-link" href="/">3</a></li>
              <li className="page-item">
                <a className="page-link" href="/">Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default AgentMessagesPage;