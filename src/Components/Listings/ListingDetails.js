import React from "react";
import {
  UncontrolledCarousel,
  Modal,
  ModalHeader,
  Row,
  ModalBody,
  Col
} from "reactstrap";
import "./ListingDetails.css";

const ListingDetails = props => {
  const listMandatoryDetails = ({ nazov, cena, id }) => {
    return (
      <Col>
        <div className="listingAttribute">Cena: {cena}€</div>
        <div className="listingAttribute">Id: {id}</div>
        <div className="listingAttribute">Obec: {}</div>
        <div className="listingAttribute">Ulica: {} </div>
      </Col>
    );
  };

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
      <ModalBody className="listingDetailsTheme noPadding">
        <Row className="m-0">
          <Col className="p-0" xs="12" lg="7">
            <UncontrolledCarousel
              items={props.propertyPics}
              autoPlay={false}
              controls={true}
              indicators={false}
            />
          </Col>
          <Col className="p-2" xs="12" lg="5">
            {listMandatoryDetails(props.property)}
            {
              //list all other attributes of property here
            }
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  );
};

export default ListingDetails;
