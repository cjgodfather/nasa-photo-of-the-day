import React from "react";

const Image = props => {
  return <img className="image" src={props.src} alt={props.note} />;
};

export default Image;
