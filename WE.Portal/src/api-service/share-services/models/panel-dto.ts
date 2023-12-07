/* tslint:disable */
/* eslint-disable */
import { Tab } from './tab';
import { WidgetDto } from './widget-dto';
export interface PanelDto {
  app_name?: null | string;
  device_id?: null | string;
  group_id?: null | string;
  group_name?: null | string;
  id?: null | string;
  panel_name?: null | string;
  roles?: null | Array<string>;
  tabs?: null | Array<Tab>;
  widgets?: null | Array<WidgetDto>;
}
