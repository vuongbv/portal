/* tslint:disable */
/* eslint-disable */
import { WidgetPosition } from './widget-position';
import { WidgetSetting } from './widget-setting';
export interface UpdateWidgetPositionModel {
  is_hidden?: null | boolean;
  position?: WidgetPosition;
  setting?: WidgetSetting;
  widget_id?: null | string;
}
