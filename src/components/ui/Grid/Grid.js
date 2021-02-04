import React from "react";
import classnames from "classnames";
import "./grid.scss";

export const Container = ({ children, className = '', ...rest }) => {
  return (
    <div className={`container ${className}`} {...rest}>
      {children}
    </div>
  );
};

export const Row = ({ children, className = '', ...rest }) => {
  return (
    <div className={`container__row ${className}`} {...rest}>
      {children}
    </div>
  );
};

export const Col = ({ children, className = '', xs, sm, md, lg,  ...rest }) => {
  const classes = classnames('container__col', {
    [`container__col--${xs}`]: xs,
    [`container__col--sm--${sm}`]: sm,
    [`container__col--md--${md}`]: md,
    [`container__col--lg--${lg}`]: lg,
  });

  return (
    <div className={`${classes} ${className}`} {...rest}>
      {children}
    </div>
  );
};