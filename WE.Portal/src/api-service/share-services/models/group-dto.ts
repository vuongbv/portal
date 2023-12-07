/* tslint:disable */
/* eslint-disable */
import { DeviceDto } from './device-dto';
import { Location } from './location';
export interface GroupDto {
  app_id?: null | string;
  app_name?: null | string;
  device_ids?: null | Array<string>;
  devices?: null | Array<DeviceDto>;
  devices_name?: null | Array<string>;
  id?: null | string;
  is_home_page?: boolean;
  location?: Location;
  name?: null | string;
  roles?: null | Array<string>;
}
