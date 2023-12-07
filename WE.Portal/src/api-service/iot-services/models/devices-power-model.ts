/* tslint:disable */
/* eslint-disable */
import { DevicePowerStatus } from './device-power-status';
export interface DevicesPowerModel {
  device_id?: null | string;
  end_date?: null | string;
  pin_number?: null | string;
  pin_state?: DevicePowerStatus;
  start_date?: null | string;
}
