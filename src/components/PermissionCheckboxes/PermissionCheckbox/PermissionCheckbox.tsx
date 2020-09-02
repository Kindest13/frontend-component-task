import React, { FC } from 'react';
import unchecked_icon from '../../../materials/uncheck.png';
import checked_icon from '../../../materials/check.png';
import PermissionCheckboxProps from './types';
import './permissionCheckbox.scss';

const permissionCheckbox: FC<PermissionCheckboxProps> = ({ label, value, onCheck, type }) => (
  <div
    onClick={() => onCheck(label, value, type)}
    className="permission-checkbox">
    <img
      id={`permission-checkbox ${label}`}
      className="permission-checkbox__checked-icon"
      src={value ? checked_icon : unchecked_icon}
      alt="permission-checkbox" />
    <label
      className={`permission-checkbox__label${value ? ' permission-checkbox__label--checked' : ''}`}
      htmlFor={`permission-checkbox ${label}`}>
        {label}
    </label>
  </div>
);

export default permissionCheckbox;
