import React from 'react';

function Separator({size = 1, className, light}) {
  const classes = [
    'separator',
    light ? 'separator-light' : null,
    `separator-${size}`,
    className
  ];
  return (
    <hr className={classes.join(" ")} />
  )
}

export default Separator;
