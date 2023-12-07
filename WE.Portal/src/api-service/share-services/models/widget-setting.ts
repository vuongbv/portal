/* tslint:disable */
/* eslint-disable */
import { StyleSetting } from './style-setting';
import { WidgetAdditionalDataList } from './widget-additional-data-list';
export interface WidgetSetting {
  chart_style_setting_id?: null | string;
  decimal_setting?: null | number;
  formular?: null | string;
  style_setting_list?: null | Array<StyleSetting>;
  widget_additional_data_list?: null | Array<WidgetAdditionalDataList>;
  widget_power_bi_filter_setting?: null | string;
}
