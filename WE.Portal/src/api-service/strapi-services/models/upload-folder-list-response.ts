/* tslint:disable */
/* eslint-disable */
import { UploadFolderListResponseDataItem } from './upload-folder-list-response-data-item';
export interface UploadFolderListResponse {
  data?: Array<UploadFolderListResponseDataItem>;
  meta?: {
'pagination'?: {
'page'?: number;
'pageSize'?: number;
'pageCount'?: number;
'total'?: number;
};
};
}
