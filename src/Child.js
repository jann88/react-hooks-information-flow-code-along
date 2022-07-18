import React from "react";

function Child({ onChangeColor }) {
  console.log(onChangeColor);
  return (
  <div
    onClick={onChangeColor}
    className="child"
    style={{ backgroundColor: "#FFF" }}
  />
);
  //return(<div className="child" style={{ backgroundColor: "#FFF" }} />);
}

export default Child;
