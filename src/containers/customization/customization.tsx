import React, { useState, FC} from 'react';
import Select from '../../components/select/select';
import Checkboxes from '../../components/checkboxes/checkboxes';
import {
  CustomizationProps,
  OnOpenSelect,
  OnCheck,
  GetCheckedClass,
} from './types';
import './customization.css';

const Customization: FC<CustomizationProps> = ({ onSelect, roles, selectedRole, onCustomChange }) => {
  const [opened, setOpened] = useState<boolean>(false);
  const onOpenSelect: OnOpenSelect = () => setOpened(!opened);
  const onCheck: OnCheck = (label, value, type) => selectedRole.change && onCustomChange(label, value, type);
  const getCheckedClass: GetCheckedClass = (value) => value ? ' checked' : '';
  const selectOpenedClass: string = opened ? ' opened' : '';
  return (
    <div className="customization">
      <Select
        roles={roles}
        selectedRole={selectedRole}
        onSelect={onSelect}
        onOpenSelect={onOpenSelect}
        openedClass={selectOpenedClass} />
      <Checkboxes
        checks={selectedRole.folders}
        getCheckedClass={getCheckedClass}
        onCheck={onCheck}
        type="Folders" />
      <hr />
      <Checkboxes
        checks={selectedRole.gems}
        getCheckedClass={getCheckedClass}
        onCheck={onCheck}
        type="Gems" />
    </div>
  );
}

export default Customization;
