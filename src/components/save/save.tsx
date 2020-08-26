import React, { FC } from 'react';
import './save.css';
import SaveProps from './types';

const save: FC<SaveProps> = ({ onSave }) => (
  <button
    onClick={onSave}
    className="button save_button">
      Save
  </button>
);

export default save;
