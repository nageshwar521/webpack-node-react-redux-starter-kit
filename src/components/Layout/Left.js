import React from 'react';

function Left({ className, ...props }) {
  const classes = ['layout-left', className];
  return <div className={classes.join(" ")}>{props.children}</div>;
}

export default Left;
