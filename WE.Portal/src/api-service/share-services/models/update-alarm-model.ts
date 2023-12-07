/* tslint:disable */
/* eslint-disable */
import { DeviceAlarmModel } from './device-alarm-model';
export interface UpdateAlarmModel {
  severity?: null | string;
  source?: DeviceAlarmModel;
  status?: null | string;
  text?: null | string;
  time?: string;
  type?: null | string;
}
