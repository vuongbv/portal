/* tslint:disable */
/* eslint-disable */
import { UsersPermissionsUserListResponseDataItem } from './users-permissions-user-list-response-data-item';
export interface UsersPermissionsUserListResponse {
  data?: Array<UsersPermissionsUserListResponseDataItem>;
  meta?: {
'pagination'?: {
'page'?: number;
'pageSize'?: number;
'pageCount'?: number;
'total'?: number;
};
};
}
