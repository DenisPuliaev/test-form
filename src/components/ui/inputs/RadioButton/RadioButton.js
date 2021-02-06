import React from "react";
import classnames from "classnames";
import "./radio.scss";

const RadioButton = ({ form, className = '', children, invalid = false, ...rest }) => {
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

export default RadioButton;