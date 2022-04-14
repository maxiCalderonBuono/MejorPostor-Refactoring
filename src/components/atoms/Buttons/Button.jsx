import React from "react";

const Button = (props) => {
  return <button className={props.styles} onClick={props.setFunction} type={props.type} disabled={props.disabled}>{props.content}</button>;
};

export default Button;
