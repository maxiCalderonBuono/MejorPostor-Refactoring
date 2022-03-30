import React from "react";

const Button = (props) => {
  return <button className={props.styles}>{props.content}</button>;
};

export default Button;
