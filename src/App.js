import React from "react";
import {HashRouter, Switch, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
