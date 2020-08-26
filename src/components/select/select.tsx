import React from 'react';
import collapse_arrow from '../../materials/collapse-arrow.svg';
import {
  SelectProps
} from './types';
import './select.css';

export default ({ onSelect, roles, selectedRole, onOpenSelect, openedClass }: SelectProps) => (
  <div className="select-wrapper">
    <label
      htmlFor="select"
      className="select_label">User Role</label>
    <div className="select-block">
      <div
        id="select"
        onClick={onOpenSelect}
        className="select">
        <ul className={`select_dropdown-list${openedClass}`}>
              <li key={selectedRole.id} className="option" data-value={selectedRole.role}>{selectedRole.role}</li>
          {
            roles.filter(({role}) => role !== selectedRole.role).map(({role, id}) => (
              <li
                onClick={({target}) => onSelect(target.getAttribute("data-value"))}
                key={id}
                className="option"
                data-value={role}>
                  {role}
              </li>
            ))
          }
        </ul>
          <img
            className={`select_collapse-arrow${openedClass}`}
            src={collapse_arrow}
            alt="collapse-arrow"/>
      </div>
    </div>
  </div>
);
