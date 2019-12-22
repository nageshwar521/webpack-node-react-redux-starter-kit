import React from 'react';
import { Button } from '../Button';

const getCloseButton = (props) => {
  return (
    <Button
      className="close-button"
      type="transparent"
      iconProps={{
        position: 'left',
        type: 'Ionicons',
        icon: 'IoMdClose',
        size: 64
      }}
      onClick={props.onClose}
    />
  );
}

function Modal({ className, closeButton = true, ...props }) {
  const classes = ['modal', className];
  return (
    <div className={classes.join(' ')}>
      <div className="modal-content">
        {closeButton ? getCloseButton(props) : null}
        {props.children}
      </div>
    </div>
  );
}

export default Modal;
