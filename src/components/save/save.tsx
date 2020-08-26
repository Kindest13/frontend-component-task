import React from 'react';
import './save.css';
import SaveProps from './types';

export default ({ onSave }: SaveProps) => (
  <button
    onClick={onSave}
    className="button save_button">
      Save
  </button>
);
