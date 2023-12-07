/* tslint:disable */
/* eslint-disable */
import { PanelDto } from './panel-dto';
export interface LeftMenuDto {
  app_id?: null | string;
  app_name?: null | string;
  device_id?: null | string;
  group_name?: null | string;
  id?: null | string;
  is_home_page?: boolean;
  panels?: null | Array<PanelDto>;
}
