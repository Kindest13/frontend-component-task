import React, { useState } from "react";
import Customization from '../customization/customization';
import Save from '../../components/save/save';
import {
  ListRole,
  GetCustomRole,
  OnChangeSelected,
  OnCustomChange,
  Right,
  OnSave
} from './types';
import './form.css';

export default () => {
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
  const getCustomRole: GetCustomRole = (list) => list.find(({role}) => role === 'Custom');
  const onChangeSelected: OnChangeSelected = (selected) => {
    const newRole = listRoles.find(({role}) => role === selected);
    setSelectedRole(newRole);
    return newRole;
  }

  const onCustomChange: OnCustomChange = (key, value, type) => {
    const checksType: string = type.toLowerCase();
    const newListRoles: ListRole[] = JSON.parse(JSON.stringify(listRoles));
    const customRole: ListRole = getCustomRole(newListRoles);
    const customRoleType: Right[] = customRole[checksType];
    customRoleType.forEach((right: Right) => {
        if(right.hasOwnProperty(key)) {
          right[key] = !value;
        }
        return right;
      })
      setListRoles(newListRoles);
      setSelectedRole(getCustomRole(newListRoles));
  }

  const onSave: OnSave = () => onChangeSelected(selectedRole.role);

  return (
    <div className="form">
      <Customization
        onSelect={onChangeSelected}
        selectedRole={selectedRole}
        onCustomChange={onCustomChange}
        roles={listRoles} />
      <Save onSave={onSave} />
    </div>
  );
}
