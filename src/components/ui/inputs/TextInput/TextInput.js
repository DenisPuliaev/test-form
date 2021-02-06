import React from "react";
import classnames from "classnames";
import "./input.scss";

const TextInput = ({ form, className = '', type = "text", invalid = false,  ...rest }) => {
  const classes = classnames({
    'input--invalid': invalid,
  });

  return (
    <input
      {...rest}
      type={type}
      className={`input ${classes} ${className}`}
    />
  );
};

export default TextInput;