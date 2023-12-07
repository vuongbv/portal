/* tslint:disable */
/* eslint-disable */
import { Role } from './role';
export interface UserDto {
  email?: null | string;
  first_name?: null | string;
  id?: null | string;
  last_name?: null | string;
  roles?: null | Array<Role>;
  tenant_icon_favicon?: null | string;
  tenant_id?: null | string;
  tenant_name?: null | string;
  tenant_title?: null | string;
  user_name?: null | string;
}
