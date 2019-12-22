import React from 'react';

function Center({ className, ...props }) {
  const classes = ['layout-center', className];
  return <div className={classes.join(" ")}>{props.children}</div>;
}

export default Center;
