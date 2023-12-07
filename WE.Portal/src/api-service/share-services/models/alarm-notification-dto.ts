/* tslint:disable */
/* eslint-disable */
import { DeviceInfo } from './device-info';
import { History } from './history';
export interface AlarmNotificationDto {
  count?: number;
  creation_time?: string;
  history?: History;
  id?: null | string;
  severity?: null | string;
  source?: DeviceInfo;
  status?: null | string;
  text?: null | string;
  time?: string;
  type?: null | string;
}
