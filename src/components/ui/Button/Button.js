import React from "react";
import "./button.scss";

export const Button = ({ className = '', children, ...rest }) => {
  return (
    <button className={`button ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;