import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import "./ListingComponent.css";
import ListingDetails from "./ListingDetails.js";
import dom from "../../img/dom.jpg";

export default function ListingComponent(props) {
  const [property, setProperty] = useState({});

  const [modal, setModal] = useState(false);

  const toggle = listing => {
    setModal(!modal);
    setProperty(listing);
  };

  const items = [
    {
      src: dom,
      altText: "Slide 1",
      caption: "Slide 1"
    },
    {
      src:
        "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
      altText: "Slide 2",
      caption: "Slide 2"
    },
    {
      src:
        "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
      altText: "Slide 3",
      caption: "Slide 3"
    }
  ];

  if (props.listings) {
    return (
        <Row>
          {props.listings.map(listing => {
            return (
              <Col className="p-3 m-0" onClick={() => toggle(listing)} xs="12" lg="6">
                <Listing listing={listing}></Listing>
              </Col>
            );
          })}
          <ListingDetails
          property={property}
          toggle={toggle}
          modal={modal}
          propertyPics={items}
        ></ListingDetails>
        </Row>
    );
  } else {
    return <div></div>;
  }

  function Listing(props) {
    console.log(props);
    return (
      <Row className="listingContainer m-0">
        <Col className="p-0" xs="12" lg="8">
          <img className="listingPic" src={items[0].src} alt="myPic"></img>
        </Col>
        <Col className="py-2" xs="12" lg="4" active={props.active}>
          <div className="listingThumbnailHeader">{props.listing.nazov}</div>
          <div>Cena: {props.listing.cena}€</div>
          <div>Rozloha: {props.listing.rozloha}</div>
          <div>Pozemok: {props.listing.pozemok}</div>
          {props.listing.balkon ? <div>Balkon: Ano</div> : ""}
        </Col>
      </Row>
    );
  }
}
