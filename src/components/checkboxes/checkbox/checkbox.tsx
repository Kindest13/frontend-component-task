import React from 'react';
import unchecked_icon from '../../../materials/uncheck.png';
import checked_icon from '../../../materials/check.png';
import CheckboxProps from './types';
import './checkbox.css';

export default ({ label, value, getCheckedClass, onCheck, type }: CheckboxProps) => (
  <div
    onClick={() => onCheck(label, value, type)}
    className="checkbox">
    <img
      id={`checkbox ${label}`}
      className="checked_icon"
      src={value ? checked_icon : unchecked_icon}
      alt="checkbox" />
    <label
      className={`checkbox_label${getCheckedClass(value)}`}
      htmlFor={`checkbox ${label}`}>
        {label}
    </label>
  </div>
);
