import React from 'react';

function List({className, ...props}) {
  const classes = ['list', className];
  return <div className={classes.join(" ")}>{props.children}</div>;
}

export default List;
