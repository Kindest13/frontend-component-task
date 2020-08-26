import {GetCheckedClass, OnCheck} from '../../containers/customization/types';

export interface Right {
  [key: string]: boolean;
}

export interface CheckboxesProps {
  type: string;
  checks: Right[];
  getCheckedClass: GetCheckedClass;
  onCheck: OnCheck;
}
