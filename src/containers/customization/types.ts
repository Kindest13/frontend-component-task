import {ListRole, OnChangeSelected, OnCustomChange} from '../form/types';

export interface CustomizationProps {
  onSelect: OnChangeSelected;
  roles: ListRole[];
  selectedRole: ListRole;
  onCustomChange: OnCustomChange;
}

export type OnOpenSelect = () => void;
export type OnCheck = (label: string, value: boolean, type: string) => boolean | void;
export type GetCheckedClass = (value: boolean) => string;
