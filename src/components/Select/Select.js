import React, { Component } from 'react';
import { Button } from '../Button';
import Label from '../Label/Label';

class Select extends Component {
  state = {
    isDropdownVisible: false
  };
  handleToggle = () => {
    this.setState({
      isDropdownVisible: !this.state.isDropdownVisible
    });
  };
  handleSelect = option => {
    this.setState(
      {
        isDropdownVisible: false
      },
      () => {
        if (this.props.onSelect) {
          this.props.onSelect(option);
        }
      }
    );
  };
  getDropdown = () => {
    const { options = [], selectedOption, field="name", returnType = "property" } = this.props;
    return (
      <div className="dropdown">
        {options.map((option, index) => {
          const btnClass = [
            option.name === selectedOption ? 'option-selected' : null
          ];
          const selectedItem = returnType === "property" ? option[field] : option;
          return (
            <Button
              key={option.name + '_' + index}
              className={btnClass.join(' ')}
              label={option.name}
              onClick={this.handleSelect.bind(null, selectedItem, option)}
            />
          );
        })}
      </div>
    );
  };
  render() {
    const { label, className, selectedOption } = this.props;
    const { isDropdownVisible } = this.state;
    const classes = ['select-field', className];
    const buttonLabel = selectedOption
      ? `${label}: ${selectedOption}`
      : `${label}`;
    return (
      <div className={classes.join(' ')}>
        <Button
          type="bordered"
          label={buttonLabel}
          iconProps={{
            className: "select-field-icon",
            position: 'right',
            type: 'MaterialDesign',
            icon: 'MdKeyboardArrowDown'
          }}
          onClick={this.handleToggle}
        />
        {isDropdownVisible ? this.getDropdown() : null}
      </div>
    );
  }
}

export default Select;