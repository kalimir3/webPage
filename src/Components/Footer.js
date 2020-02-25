import React from "react";
import "./Footer.css";
import { Col, Row } from "reactstrap";

import googleMap from "../img/kontaktGoogleMap.png";

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerHeader">Kontaktujte nas</div>
      <Row className="px-3 footerBody">
        <Col sm="12" lg="8">
          <Row>
            <Col sm="9">
              <a
                href="https://www.google.com/maps/place/N%C3%A1mestie+%C4%BDudov%C3%ADta+%C5%A0t%C3%BAra+10,+974+05+Bansk%C3%A1+Bystrica,+Slovensko/@48.7229279,19.1301866,18z/data=!3m1!4b1!4m5!3m4!1s0x47153de857bbe1a1:0x7d9cd3f904d633ef!8m2!3d48.7229261!4d19.1312809"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="img" src={googleMap} alt="mapa"></img>
              </a>
            </Col>
            <Col sm="3">
              <div>Námestie Ľ. Štúra 10</div>
              <div>Banská Bystrica</div>
              <div>974 05</div>
            </Col>
          </Row>
        </Col>
        <Col sm="6" lg="4">
          Tu bude preklik na "nas tim"
        </Col>
        <Col sm="6" lg="12">
          <a
            href="https://www.messenger.com/t/maxiss.sk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Napiste nam na Facebooku
          </a>
        </Col>
      </Row>
    </div>
  );
}
