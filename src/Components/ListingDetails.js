import React from "react";
import {
  UncontrolledCarousel,
  Modal,
  ModalHeader,
  Row,
  ModalBody,
  Col,
} from "reactstrap";
import "./ListingDetails.css";

const ListingDetails = props => {

  return (
    <Modal
      isOpen={props.modal}
      scrollable={true}
      centered={true}
      toggle={props.toggle}
      className="listingDetails"
    >
      <ModalHeader className="listingDetailsTheme" toggle={props.toggle}>
        {props.property.nazov}
      </ModalHeader>
      <ModalBody className="listingDetailsTheme listingBody">
        <Row>
          <Col className="p-1" xs="12" lg="7"> <UncontrolledCarousel items={props.propertyPics} /></Col>
          <Col className="p-1" xs="12" lg="5"> {Object.entries(props.property)}</Col>
        </Row>
      </ModalBody>
    </Modal>
  );
};

export default ListingDetails;
