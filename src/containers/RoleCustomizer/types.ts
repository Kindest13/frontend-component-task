import {MouseEvent} from 'react';

export type OnSave = (event: MouseEvent<HTMLButtonElement>) => void;

export type OnSelect = (event: MouseEvent<HTMLUListElement>) => ListRole;

export interface RoleCustomizerProps {
  onSelect: OnSelect;
  onSave: OnSave;
}

export interface Right {
  [key: string]: boolean;
}

export interface ListRole {
  id: number;
  role: string;
  change: boolean;
  folders: Right[];
  gems: Right[];
  [key: string]: Right[] | any;
}

export type GetCustomRole = (list: ListRole[]) => ListRole;

export type OnCustomChange = (key: string, value: boolean, type: string) => void;

export type OnOpenSelect = () => void;

export type OnCheck = (label: string, value: boolean, type: string) => boolean | void;
