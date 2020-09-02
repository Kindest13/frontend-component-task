import {OnCheck} from '../../containers/RoleCustomizer/types';

export interface Right {
  [key: string]: boolean;
}

export interface PermissionCheckboxesProps {
  type: string;
  checks: Right[];
  onCheck: OnCheck;
}
