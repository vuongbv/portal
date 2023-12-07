/* tslint:disable */
/* eslint-disable */
import { Role } from './role';
import { UserSource } from './user-source';
export interface CreateUserModel {
  email?: null | string;
  password?: null | string;
  roles?: null | Array<Role>;
  user_source?: UserSource;
}
