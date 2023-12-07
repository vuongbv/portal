/* tslint:disable */
/* eslint-disable */
import { DeviceAlarmModel } from './device-alarm-model';
export interface CreateAlarmModel {
  severity?: null | string;
  source?: DeviceAlarmModel;
  status?: null | string;
  text?: null | string;
  time?: string;
  type?: null | string;
}
