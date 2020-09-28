import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

const CarouselComp = (props) => {
  //Control the Carousel component
  //Reference: https://react-bootstrap.github.io/components/carousel/#carousels-controlled
  const [index, setIndex] = useState(0);
  const { delay, children } = props;

  //Control the Carousel component
  //Reference: https://react-bootstrap.github.io/components/carousel/#carousels-controlled
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  //Based on the requirement: Add two buttons with a specific class
  //Receives one parameter with two possible options: "Next" and "Previous"
  //Return: Next or Previous component based on the incomming value.
  const directionButtons = (direction) => {
    return (
      <span
        aria-hidden="true"
        className={direction === "Next" ? "button-next" : "button-prev"}
      >
        {direction}
      </span>
    );
  };

  //Display all the slides sent in the children object
  //Library used: react-bootstrap
  const displayItems = () => {
    const items = (
      <Carousel
        interval={Number(delay)}
        nextLabel={"Next"}
        prevLabel={"Previous"}
        activeIndex={index}
        onSelect={handleSelect}
        controls={true}
        nextIcon={directionButtons("Next")}
        prevIcon={directionButtons("Previous")}
      >
        {children.map((element, idx) => (
          <Carousel.Item key={idx} style={{ height: "300px" }}>
            <img
              style={{ height: "300px" }}
              className="d-block w-100"
              src={element.imgURL}
              alt={element.title}
            />
            <Carousel.Caption>
              <h3>{element.title}</h3>
              <p>{element.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    );
    return items;
  };

  return <div className="container-fluid">{displayItems()}</div>;
};

export default CarouselComp;
