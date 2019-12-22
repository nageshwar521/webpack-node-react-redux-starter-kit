import React from 'react';
import cx from 'classnames';
import * as Ionicons from 'react-icons/io';
import * as Antdesign from 'react-icons/ai';
import * as Feather from 'react-icons/fi';
import * as MaterialDesign from 'react-icons/md';

function IconComponent({ position, className, icon, type = 'Ionicons', ...props }) {
  let Icon = Ionicons[icon];
  if (type === 'Antdesign') {
    Icon = Antdesign[icon];
  } else if (type === 'Feather') {
    Icon = Feather[icon];
  } else if (type === 'MaterialDesign') {
    Icon = MaterialDesign[icon];
  }
  const iconProps = Object.assign(
    {},
    {
      size: 24
    },
    props
  );
  const classes = ['btn-icon', className];
  return <Icon className={classes.join(" ")} {...iconProps} />;
}

function Button({ label, type, size, className, iconProps, labelClass, ...props }) {
  const classes = ['btn', className];
  if (type === 'transparent') {
    classes.push('btn-transparent');
  } else if (type === 'primary') {
    classes.push('btn-primary');
  } else if (type === 'link') {
    classes.push('btn-link');
  } else if (type === 'bordered') {
    classes.push('btn-bordered');
  }

  if (size === 'large') {
    classes.push('btn-large');
  } else if (size === 'extra-large') {
    classes.push('btn-xlarge');
  }

  const position = iconProps && iconProps.position ? iconProps.position : null;
  const labelClasses = ['btn-label', 'flex-grow', labelClass];
  return (
    <button className={classes.join(' ')} {...props}>
      {position && position === 'left' ? (
        <IconComponent {...iconProps} />
      ) : null}
      <span className={labelClasses.join(" ")}>{label ? label : null}</span>
      {position && position === 'right' ? (
        <IconComponent {...iconProps} />
      ) : null}
    </button>
  );
}

export default Button;
