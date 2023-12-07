/* tslint:disable */
/* eslint-disable */
export interface UsersPermissionsUser {
  blocked?: boolean;
  confirmed?: boolean;
  createdAt?: string;
  email?: string;
  id?: number;
  provider?: string;
  updatedAt?: string;
  username?: string;
  role?:role;
  tenant:tenant
}

export interface role {
  id: number;
  name: string;
}
export interface tenant {
  id: number;
  name: string;
}
