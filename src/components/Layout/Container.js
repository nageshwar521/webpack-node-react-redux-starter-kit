import React from 'react';

function Container({ className, ...props }) {
  const classes = ['layout-container', className];
  return <div className={classes.join(' ')}>{props.children}</div>;
}

export default Container;
