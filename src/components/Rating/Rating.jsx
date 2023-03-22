import React from "react";
import "./Rating.scss";

const CustomBox = ({ boxCount }) => {
  const renderBoxes = () => {
    const boxes = [];
    const redBoxIndex = boxCount + 1;

    for (let i = 0; i < 5; i++) {
      if (i === redBoxIndex) {
        boxes.push(<div key={i} className="redBox"></div>);
      } else {
        boxes.push(<div key={i} className="blueBox"></div>);
      }
    }

    return boxes;
  };

  return <div>{renderBoxes()}</div>;
};

export default CustomBox;
