import React from "react";
import classnames from "classnames";
import "./input.scss";

export const RadioButton = ({ className = '', children, invalid = false, ...rest }) => {
  const classes = classnames({
    'radio--invalid': invalid,
  });

  return (
    <label className={`radio ${classes} ${className}`}>
      <input className="radio__input" {...rest} />
      <span className="radio__checkmark"></span>
      {children}
    </label>
  );
};

export const TextInput = ({ className = '', type = "text", invalid = false,  ...rest }) => {
  const classes = classnames({
    'input--invalid': invalid,
  });

  return (
    <input
      {...rest}
      className={`input ${classes} ${className}`}
    />
  );
};

export const Input = (props) => {
  const { type } = props;

  switch(type) {
    case "radio":
      return <RadioButton {...props} />;
    default:
      return <TextInput {...props} />;
  }
};