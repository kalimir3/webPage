import React from "react";
import "./Header.css";
import logo from "../logo.svg";
import Ponuka from "../Pages/Ponuka.js";
import Dopyt from "../Pages/Dopyt.js";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Header(props) {
  let telNumber = `tel:${props.telNumber}`;

  return (
    <Router>
      <div className="headerContainer">
        <div className="logoContainer">
          <Link to="/">
            <img className="logo" src={logo}></img>
          </Link>
        </div>
        <div id="kontakt">
          <a className="nonBlueLink" href={telNumber}>
            Zavolajte nam:{props.telNumber}
          </a>
        </div>

        <div className="categoryContainer">
          <Link to="/ponuka">
            <img className="logo" src={logo}></img>
          </Link>
        </div>

        <div className="categoryContainer right">
          <Link to="/dopyt">
            <img className="logo" src={logo}></img>
          </Link>
        </div>
      </div>
      <div id="content">
        <Switch>
          <Route path="/ponuka">
            <Ponuka />
          </Route>
          <Route path="/dopyt">
            <Dopyt />
          </Route>
          <Route path="/"></Route>
        </Switch>
      </div>
    </Router>
  );
}
