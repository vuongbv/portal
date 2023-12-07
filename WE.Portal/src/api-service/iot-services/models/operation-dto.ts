/* tslint:disable */
/* eslint-disable */
import { OperationStatus } from './operation-status';
export interface OperationDto {
  cno?: null | string;
  command?: null | string;
  command_status?: OperationStatus;
  device_name?: null | string;
  execution_time?: string;
  point?: null | string;
  point_status?: null | string;
  source?: null | string;
}
