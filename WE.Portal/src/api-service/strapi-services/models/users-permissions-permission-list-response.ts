/* tslint:disable */
/* eslint-disable */
import { UsersPermissionsPermissionListResponseDataItem } from './users-permissions-permission-list-response-data-item';
export interface UsersPermissionsPermissionListResponse {
  data?: Array<UsersPermissionsPermissionListResponseDataItem>;
  meta?: {
'pagination'?: {
'page'?: number;
'pageSize'?: number;
'pageCount'?: number;
'total'?: number;
};
};
}
