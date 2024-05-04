import React from "react";

import "./Button.css";

const Button = (props) => {
  console.log(props.isValid);
  return (
    <button
      type={props.type}
      className={`button ${!props.isValid ? "inValid" : ""}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
