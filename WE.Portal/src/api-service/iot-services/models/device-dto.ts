/* tslint:disable */
/* eslint-disable */
import { ExtInfo } from './ext-info';
import { Position } from './position';
export interface DeviceDto {
  created_date?: string;
  ext_info?: ExtInfo;
  gt_position?: Position;
  id?: null | string;
  name?: null | string;
  operation_status?: null | string;
  owner?: null | string;
  panel?: null | string;
  source_id?: null | string;
  status?: null | string;
  updated_date?: string;
  uptime?: null | string;
}
