import React from 'react';
import Checkbox from './checkbox/checkbox';
import {
  CheckboxesProps,
  Right
} from './types';
import './checkboxes.css';

export default ({ type, checks, getCheckedClass, onCheck }: CheckboxesProps) => (
  <div className="checkboxes_wrapper">
    <label className="checkboxes_label">{type}</label>
    <div className="checkboxes">
      {
        checks.map((check: Right, index: number) => {
          const [[label, value]] = Object.entries(check);
          return (
          <Checkbox
            key={index}
            label={label}
            value={value}
            type={type}
            getCheckedClass={getCheckedClass}
            onCheck={onCheck} />
        )})
      }
    </div>
  </div>
);
