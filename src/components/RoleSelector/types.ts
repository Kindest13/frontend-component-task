import {ListRole, OnOpenSelect, OnSelect} from '../../containers/RoleCustomizer/types';

export default interface RoleSelectorProps {
  onSelect: OnSelect;
  roles: ListRole[];
  selectedRole: ListRole;
  onOpenSelect: OnOpenSelect;
  opened: boolean;
}
