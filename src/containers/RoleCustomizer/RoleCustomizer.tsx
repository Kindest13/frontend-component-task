import React, { useState, FC } from "react";
import RoleSelector from '../../components/RoleSelector/RoleSelector';
import PermissionCheckboxes from '../../components/PermissionCheckboxes/PermissionCheckboxes';
import Save from '../../components/SavePermissionsButton/SavePermissionsButton';
import {
  RoleCustomizerProps,
  ListRole,
  GetCustomRole,
  OnCustomChange,
  Right,
  OnOpenSelect,
  OnCheck
} from './types';
import './roleCustomizer.scss';

const RoleCustomizer: FC<RoleCustomizerProps> = ({onSelect , onSave}) => {
  const [listRoles, setListRoles] = useState<ListRole[]>([
    {
      id: 1,
      role: "View-only",
      change: false,
      folders: [
        {create: false},
        {update: false},
        {move: false},
        {delete: false},
        {view: true},
        {share: false}
      ],
      gems: [
        {create: false},
        {update: false},
        {move: false},
        {delete: false},
        {view: true},
        {share: false}
      ]
    },
    {
      id: 2,
      role: "Admin",
      change: false,
      folders: [
        {create: true},
        {update: true},
        {move: true},
        {delete: true},
        {view: true},
        {share: true}
      ],
      gems: [
        {create: true},
        {update: true},
        {move: true},
        {delete: true},
        {view: true},
        {share: true}
      ]
    },
    {
      id: 3,
      role: "User",
      change: false,
      folders: [
        {create: true},
        {update: true},
        {move: false},
        {delete: false},
        {view: true},
        {share: true}
      ],
      gems: [
        {create: true},
        {update: true},
        {move: false},
        {delete: false},
        {view: true},
        {share: true}
      ]
    },
    {
      id: 4,
      role: "Member",
      change: false,
      folders: [
        {create: false},
        {update: false},
        {move: false},
        {delete: false},
        {view: true},
        {share: true}
      ],
      gems: [
        {create: false},
        {update: false},
        {move: false},
        {delete: false},
        {view: true},
        {share: true}
      ]
    },
    {
      id: 5,
      role: "Custom",
      change: true,
      folders: [
        {create: false},
        {update: false},
        {move: false},
        {delete: false},
        {view: false},
        {share: false}
      ],
      gems: [
        {create: false},
        {update: false},
        {move: false},
        {delete: false},
        {view: false},
        {share: false}
      ]
    },
  ]);
  
  const [selectedRole, setSelectedRole] = useState<ListRole>(listRoles[0]);
  const [opened, setOpened] = useState<boolean>(false);

  const onOpenSelect: OnOpenSelect = () => setOpened(!opened);

  const onCheck: OnCheck = (label, value, type) => selectedRole.change && onCustomChange(label, value, type);

  const getCustomRole: GetCustomRole = (list) => list.find(({role}) => role === 'Custom');

  // const onRoleSelect = () => setSelectedRole(onSelect());

  const onCustomChange: OnCustomChange = (key, value, type) => {
    const checksType: string = type.toLowerCase();
    const newListRoles: ListRole[] = listRoles.map(listRole => {
      if(listRole.role === 'Custom') {
        const customRoleRightsType: Right[] = [...listRole[checksType]];
        customRoleRightsType.forEach(right => {
          if(typeof right[key] === 'boolean') {
            right[key] = !value;
          }
        })
        listRole[checksType] = customRoleRightsType;
      }

      return listRole;
    })
    setListRoles(newListRoles);
    setSelectedRole(getCustomRole(newListRoles));
  }
  

  return (
    <div className="role-customizer">
      <RoleSelector
        selectedRole={selectedRole}
        onOpenSelect={onOpenSelect}
        opened={opened}
        roles={listRoles}
        onSelect={onSelect} />
      <PermissionCheckboxes
        checks={selectedRole.folders}
        onCheck={onCheck}
        type="Folders" />
      <hr className="role-customizer__horizontal-line" />
      <PermissionCheckboxes
        checks={selectedRole.gems}
        onCheck={onCheck}
        type="Gems" />
      <Save onSave={onSave} />
    </div>
  );
}

export default RoleCustomizer;
