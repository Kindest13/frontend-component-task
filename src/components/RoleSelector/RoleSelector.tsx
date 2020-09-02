import React, { FC } from 'react';
import collapse_arrow from '../../materials/collapse-arrow.svg';
import RoleSelectorProps from './types';
import './roleSelector.scss';

const roleSelector: FC<RoleSelectorProps> = ({ onSelect, roles, selectedRole, onOpenSelect, opened }) => (
  <div className="role-selector">
    <label
      htmlFor="role-selector"
      className="role-selector__label">User Role</label>
    <div className="role-selector__block">
      <div
        id="role-selector"
        onClick={onOpenSelect}
        className="role-selector__list-wrapper">
        <ul
          onClick={onSelect}
          className={`role-selector__dropdown-list${opened ? ' role-selector__dropdown-list--opened' : ''}`}>
              <li key={selectedRole.id} className="role-selector__dropdown-list__option" data-value={selectedRole.role}>{selectedRole.role}</li>
          {
            roles.filter(({role}) => role !== selectedRole.role).map(({role, id}) => (
              <li
                key={id}
                className="role-selector__dropdown-list__option"
                data-value={role}>
                  {role}
              </li>
            ))
          }
        </ul>
          <img
            className={`role-selector__dropdown-list__collapse-arrow${opened ? ' role-selector__dropdown-list__collapse-arrow--opened' : ''}`}
            src={collapse_arrow}
            alt="collapse-arrow"/>
      </div>
    </div>
  </div>
);

export default roleSelector;
