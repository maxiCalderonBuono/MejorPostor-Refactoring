import React from "react";

const Button = (props) => {
  return <button className={props.styles} onClick={props.setFunction} >{props.content}</button>;
};

export default Button;
