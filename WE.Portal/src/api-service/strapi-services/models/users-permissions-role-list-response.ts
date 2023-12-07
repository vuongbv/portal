/* tslint:disable */
/* eslint-disable */
import { UsersPermissionsRoleListResponseDataItem } from './users-permissions-role-list-response-data-item';
export interface UsersPermissionsRoleListResponse {
  data?: Array<UsersPermissionsRoleListResponseDataItem>;
  meta?: {
'pagination'?: {
'page'?: number;
'pageSize'?: number;
'pageCount'?: number;
'total'?: number;
};
};
}
