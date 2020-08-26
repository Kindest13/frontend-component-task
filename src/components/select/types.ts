import {ListRole, OnChangeSelected} from '../../containers/form/types';
import {OnOpenSelect} from '../../containers/customization/types';

export interface SelectProps {
  onSelect: OnChangeSelected;
  roles: ListRole[];
  selectedRole: ListRole;
  onOpenSelect: OnOpenSelect;
  openedClass: string;
}
