import React from "react";
import "./Header.css";
import logo from "../logo.svg";
import Ponuka from "../Pages/Ponuka.js";
import Dopyt from "../Pages/Dopyt.js";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container } from "reactstrap";
import KontaktCardComponent from "./Listings/KontaktCardComponent";
import Cennik from "./Cennik/Cennik";
import PonukaNavbar from "./PonukaNavbar";

export default function Header(props) {
  let telNumber = `tel:${props.telNumber}`;

  return (
    <Router>
      <div className="headerContainer">
        <div className="logoContainer">
          <Link to="/">
            <img className="logo" alt={logo} src={logo}></img>
          </Link>
        </div>
        <div id="kontakt">
          <a className="nonBlueLink" href={telNumber}>
            Zavolajte nam:{props.telNumber}
          </a>
        </div>

        <div className="categoryContainer">
          <Link to="/ponuka">
            <img className="logo" alt={logo} src={logo}></img>
          </Link>
        </div>

        <div className="categoryContainer right">
          <Link to="/dopyt">
            <img className="logo" alt={logo} src={logo}></img>
          </Link>
        </div>
      </div>
      <Container fluid={true} id="content">
        <Switch>
        <Route exact path="/ponuka">
            <Ponuka />
          </Route>
          <Route path="/ponuka">
            <PonukaNavbar></PonukaNavbar>
          </Route>

          <Route path="/dopyt">
            <Dopyt />
          </Route>
          <Route path="/">
            <KontaktCardComponent></KontaktCardComponent>
            <Cennik></Cennik>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}
