import React from 'react';
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  Redirect
} from "react-router-dom";

import './Shell.css';

import List from "../list/List";
import About from "../about/About";
import Details from "../details/Details";

function Shell() {
  const match = useRouteMatch();

  return (
    <div className="shell">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">Pokédex</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to={`${match.url}/pokedex`} className="nav-link">Pokédex</Link>
            </li>
            <li className="nav-item">
              <Link to={`${match.url}/about`} className="nav-link">About</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Switch>
        <Route exact path={match.path} component={() => <Redirect to={`${match.path}/pokedex`} />} />
        <Route exact path={`${match.path}/pokedex`} component={List} />
        <Route exact path={`${match.path}/pokedex/:id`} component={Details} />
        <Route path={`${match.path}/about`} component={About} />
      </Switch>
    </div>
  );
}

export default Shell;
