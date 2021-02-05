import React from "react";
import classnames from "classnames";
import "./input.scss";

export const RadioButton = ({ className = '', children, ...rest }) => {
  console.log('RadioButton')
  return (
    <label class="radio">
      <input className="radio__input" type="radio" {...rest} />
      <span class="radio__checkmark"></span>
      {children}
    </label>
  );
};

export const Input = ({ className = '', ...rest }) => {
  const classes = classnames({});

  return (
    <input
      {...rest}
      type="text"
      className={`input ${classes} ${className}`}
    />
  );
};

export const InputSwitcher = (props) => {
  const { type } = props;
  console.log('type', type)

  switch(type) {
    case "radio":
      return <RadioButton {...props} />;
    default:
      return <Input {...props} />;
  }
};