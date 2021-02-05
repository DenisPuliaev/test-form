import React from "react";
import classnames from "classnames";
import "./input.scss";

export const RadioButton = ({ className = '', children, ...rest }) => {
  console.log('RadioButton')
  return (
    <label className={`${className} radio`}>
      <input className="radio__input" type="radio" {...rest} />
      <span className="radio__checkmark"></span>
      {children}
    </label>
  );
};

export const TextInput = ({ className = '', ...rest }) => {
  const classes = classnames({});

  return (
    <input
      {...rest}
      type="text"
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