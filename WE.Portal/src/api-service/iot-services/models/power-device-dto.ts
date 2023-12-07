/* tslint:disable */
/* eslint-disable */
import { OperationDto } from './operation-dto';
export interface PowerDeviceDto {
  commands?: null | Array<OperationDto>;
  device_id?: null | string;
  device_name?: null | string;
  status?: null | string;
}
