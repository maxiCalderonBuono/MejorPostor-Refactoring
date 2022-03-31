import React from "react";

const Button = (props) => {
  return <button className={props.styles} onClick={props.setFunction} type={props.type}>{props.content} </button>;
};

export default Button;
