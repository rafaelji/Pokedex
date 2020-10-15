import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/home/Home";
import Shell from "./components/shell/Shell";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/app" component={Shell} />
      </Switch>
    </Router>
  );
}

export default App;
