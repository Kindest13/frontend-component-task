import React, { FC } from 'react';
import PermissionCheckbox from './PermissionCheckbox/PermissionCheckbox';
import {
  PermissionCheckboxesProps,
  Right
} from './types';
import './permissionsCheckboxes.scss';

const permissionCheckboxes: FC<PermissionCheckboxesProps> = ({ type, checks, ...rest }) => (
  <div className="permission-checkboxes">
    <label className="permission-checkboxes__label">{type}</label>
    <div className="permission-checkboxes__row">
      {
        checks.map((check: Right, index: number) => {
          const [[label, value]] = Object.entries(check);
          return (
          <PermissionCheckbox
            key={index}
            label={label}
            value={value}
            type={type}
            {...rest} />
        )})
      }
    </div>
  </div>
);

export default permissionCheckboxes;
