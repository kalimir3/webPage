
import React, { useState } from 'react';
import { CarouselItem, CarouselCaption, UncontrolledCarousel, Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Carousel } from 'reactstrap';
import './ListingDetails.css'

const ListingDetails = (props) => {
  const {
    className,
    listing
  } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === props.propertyPics.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? props.propertyPics.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = props.propertyPics.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
      <Modal isOpen={props.modal} scrollable={true} centered={true} toggle={props.toggle} className="listingDetails">
        <ModalHeader className="listingDetailsTheme" toggle={props.toggle}>{props.property.nazov}</ModalHeader>
        <ModalBody className="listingDetailsTheme listingBody"><UncontrolledCarousel items={props.propertyPics} />;
        {Object.entries(props.property)}
      </ModalBody>
      </Modal>
  );
}

export default ListingDetails;