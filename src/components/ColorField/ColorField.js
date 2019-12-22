import React from 'react';
import Label from '../Label/Label';
import { Button } from '../Button';

function ColorField({className, label, colors = [], selectedColor, onClick}) {
  const classes = ['color-field', 'm-v-20', 'align-items-center', className];
  return (
    <div className={classes.join(' ')}>
      <Label text={label} />
      <div className="btn-group justify-content-center align-items-center">
        {colors.map((color, index) => {
          const style = { backgroundColor: color.hexcode };
          const colorClasses = [
            'color-button',
            'm-h-5',
            selectedColor === color.name ? 'color-selected' : null
          ];
          return (
            <Button
              key={color.name + '_' + index}
              type="bordered"
              className={colorClasses.join(' ')}
              style={style}
              onClick={onClick.bind(null, color)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ColorField;
