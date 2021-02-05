import React from "react";
import classnames from "classnames";
import "./form.scss";
import { InputSwitcher } from '../Input';

export const FormGroup = ({ children, className = '', ...rest }) => {
  const classes = classnames("form-group", {});

  return (
    <div className={`${classes} ${className}`} {...rest}>
      {children}
    </div>
  );
};

export const FormLabel = ({ children, className = '', right, ...rest }) => {
  const classes = classnames("form-group__label", {});

  return (
    <div className={`${classes} ${className}`} {...rest}>
      {children}
    </div>
  );
};

export const FormInput = ({ className = '', ...rest }) => {
  const classes = classnames("form-group__input", {});

  return (
    <InputSwitcher className={`${classes} ${className}`} {...rest} />
  );
};