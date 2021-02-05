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
    <div className={`row ${className}`} {...rest}>
      {children}
    </div>
  );
};

export const Col = ({ children, className = '', xs, sm, md, lg,  ...rest }) => {
  const classes = classnames('row__col', {
    [`row__col--${xs}`]: xs,
    [`row__col--sm--${sm}`]: sm,
    [`row__col--md--${md}`]: md,
    [`row__col--lg--${lg}`]: lg,
  });

  return (
    <div className={`${classes} ${className}`} {...rest}>
      {children}
    </div>
  );
};