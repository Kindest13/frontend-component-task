import React, { FC } from 'react';
import Checkbox from './checkbox/checkbox';
import {
  CheckboxesProps,
  Right
} from './types';
import './checkboxes.css';

const checkboxes: FC<CheckboxesProps> = ({ type, checks, getCheckedClass, onCheck }) => (
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

export default checkboxes;
