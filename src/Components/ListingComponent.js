import React, { useState } from "react";
import {Row, Col } from "reactstrap";
import "./ListingComponent.css";

export default function ListingComponent(props) {
  const [property, setProperty] = useState(null);

  if (props.listings) {
    return (
        <Row className="m-1 p-1 listingContainer">
          {props.listings.map(listing => {
            return (
              <Col className="p-4" 
                xs="12"
                md="6"
                lg="4"
                onClick={() => setProperty(listing)}
                key={listing.id}
              >
                <Listing listing={listing}></Listing>
              </Col>
            );
          })}
          {property != null ? (
            <DetailListingu property={property}></DetailListingu>
          ) : null}
        </Row>
    );
  } else {
    return <div></div>;
  }

  function DetailListingu({ property }) {
    return property != null ? (
      <Col onClick={() => setProperty(null)} xs="12" id="listingDetails">
        {Object.entries(property)}
      </Col>
    ) : null;
  }

  function Listing(props) {
    return (
      <Col className="listing" active={props.active}>
        <div>{props.listing.nazov}</div>
        <div>Cena: {props.listing.cena}€</div>
        <div>Rozloha: {props.listing.rozloha}</div>
        <div>Pozemok: {props.listing.pozemok}</div>
        {props.listing.balkon ? <div>Balkon: Ano</div> : ""}
      </Col>
    );
  }
}
