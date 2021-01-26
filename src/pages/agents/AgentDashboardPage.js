import React from "react";

class AgentDashboardPage extends React.Component {
  render() {
    return (
      <main>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div>
                <h2>Properties</h2>
                <p><strong>New this month:</strong> 10</p>
                <p><strong>Closed deals:</strong> 7</p>
                <p><strong>Active listings:</strong> 36</p>
                <p><strong>Total listed:</strong> 264</p>
              </div>
            </div>
            <div className="col-4">
              <div>
                <h2>Calendar</h2>
                <p><strong>meeting today:</strong> 2</p>
                <p><strong>meeting this week:</strong> 23</p>
                <p><strong>meeting this month:</strong> 36</p>
                <p><strong>Total future meetings:</strong> 89</p>
              </div>
            </div>
            <div className="col-4">
              <div>
                <h2>Messages</h2>
                <p><strong>New messages:</strong> 8</p>
                <p><strong>Total messages:</strong> 350</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default AgentDashboardPage;