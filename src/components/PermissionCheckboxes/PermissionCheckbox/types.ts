import {OnCheck} from '../../../containers/RoleCustomizer/types';

export default interface PermissionCheckboxProps {
  label: string;
  value: boolean;
  onCheck: OnCheck;
  type: string;
}
