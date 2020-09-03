import React, { FC } from 'react';
import './savePermissionsButton.scss';
import SavePermissionsButtonProps from './types';

const SavePermissionsButton: FC<SavePermissionsButtonProps> = ({ onSave }) => (
  <button
    data-testid="save-button"
    onClick={onSave}
    className="savePermissionsButton">
      Save
  </button>
);

export default SavePermissionsButton;
