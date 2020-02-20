import React from "react";
import "./Footer.css";
import { Col, Row } from "reactstrap";

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerHeader">Chcete nas navstivit?</div>
      <Row className="px-3 footerBody">
        <Col sm="12" lg="8" >
          <Row>
            <Col  sm="9">Mapa</Col>
            <Col  sm="3">Adresa text </Col>
          </Row>
        </Col>
        <Col  sm="6" lg="4">
          Tu bude preklik na "nas tim"
        </Col>
        <Col  sm="6" lg="12">
          osledna kategoria: Kontaktujte nas FB?
        </Col>
      </Row>
    </div>
  );
}
