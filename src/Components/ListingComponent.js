import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./ListingComponent.css"

export default function ListingComponent(props) {
    if (props.listings) {
    return (
      <Container className="container">
        <Row xs="1" md="2" lg="4">
          {props.listings.map(listing => {
            return (
              <Col className="padding" key={listing.id}>
                <Listing listing={listing}></Listing>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  } else {
    return <div></div>;
  }
}

function Listing(props) {
    return (
    <div className="listing">
      <div>{props.listing.nazov}</div>
      <div>{props.listing.cena}</div>
      <div>{props.listing.rozloha}</div>
      <div>{props.listing.pozemok}</div>
    </div>
  );
}
