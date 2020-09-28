import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

const CarouselComp = (props) => {
  const { delay, children } = props;
  const [index, setIndex] = useState(0);
  // console.log(delay, children);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

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
