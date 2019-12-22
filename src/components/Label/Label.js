import React from 'react';

function Label({type="block", className, text}) {
  const classes = ['label', className];
  if (type === "inline") {
    classes.push("label-inline");
  }
  return <div className={classes.join(' ')}>{text}</div>;
}

export default Label;
