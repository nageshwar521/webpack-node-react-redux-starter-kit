import React from 'react';

function Right({ className, ...props }) {
  const classes = ['layout-right', className];
  return <div className={classes.join(" ")}>{props.children}</div>;
}

export default Right;
