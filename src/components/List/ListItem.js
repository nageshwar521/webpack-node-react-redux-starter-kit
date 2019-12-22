import React from 'react';

function ListItem({ className, ...props }) {
  const classes = ['list-item', className];
  return <div className={classes.join(" ")}>{props.children}</div>;
}

export default ListItem;
