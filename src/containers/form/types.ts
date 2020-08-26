import {MouseEvent} from 'react';

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

export type OnChangeSelected = (selected: string | MouseEvent<HTMLLIElement>) => ListRole;

export type OnSave = (event: MouseEvent<HTMLButtonElement>) => ListRole;

export type OnCustomChange = (key: string, value: boolean, type: string) => void;
