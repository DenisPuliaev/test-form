import React from "react";
import classnames from "classnames";
import "./form.scss";

export const FormGroup = ({ children, className = '', ...rest }) => {
  const classes = classnames("form-group", {});

  return (
    <div className={`${classes} ${className}`} {...rest}>
      {children}
    </div>
  );
};

export const FormLabel = ({ children, className = '', ...rest }) => {
  const classes = classnames("label", {});

  return (
    <div className={`${classes} ${className}`} {...rest}>
      {children}
    </div>
  );
};