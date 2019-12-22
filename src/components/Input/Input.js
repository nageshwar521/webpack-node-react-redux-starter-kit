import React, { Component } from 'react';

class Input extends Component {
  handleChange = e => {
    const value = e.target.value;
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  };
  render() {
    const { className, onChange, value, ...props } = this.props;
    const classes = ['form-input', className];
    return (
      <input
        className={classes.join(' ')}
        onChange={this.handleChange}
        value={value}
        {...props}
      />
    );
  }
}

export default Input;