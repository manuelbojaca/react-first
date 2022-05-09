import React from "react";

const Button = (props) => {
  const { info } = props;
  return <button>Hola, mi nombre es {info}</button>;
};

export default Button;
