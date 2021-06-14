import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflow: "scroll",
        border: "5px solid black",
        height: "800px",
        background: `linear-gradient(to right, ${props.color1}, ${props.color2})`,
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
