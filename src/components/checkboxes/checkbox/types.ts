import {GetCheckedClass, OnCheck} from '../../../containers/customization/types';

export default interface CheckboxProps {
  label: string;
  value: boolean;
  getCheckedClass: GetCheckedClass;
  onCheck: OnCheck;
  type: string;
}
