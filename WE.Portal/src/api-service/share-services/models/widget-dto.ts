/* tslint:disable */
/* eslint-disable */
import { ChartType } from './chart-type';
import { DataAggregateType } from './data-aggregate-type';
import { DataResultType } from './data-result-type';
import { Periodicity } from './periodicity';
import { PowerType } from './power-type';
import { WidgetPosition } from './widget-position';
import { WidgetSetting } from './widget-setting';
import { WidgetType } from './widget-type';
export interface WidgetDto {
  chart_type?: ChartType;
  data_aggregate_type?: DataAggregateType;
  data_frequency?: null | string;
  data_path?: null | string;
  data_point?: null | string;
  data_result_type?: DataResultType;
  html_template?: null | string;
  id?: null | string;
  is_hidden?: null | boolean;
  line_name?: null | string;
  panel_id?: null | string;
  periodicity?: Periodicity;
  pin_number?: null | string;
  position?: WidgetPosition;
  power_type?: PowerType;
  ref_source_id?: null | string;
  setting?: WidgetSetting;
  source_id?: null | string;
  sub_id?: null | string;
  tab_name?: null | string;
  unit?: null | string;
  widget_data_icon?: null | string;
  widget_description?: null | string;
  widget_name?: null | string;
  widget_type?: WidgetType;
  widget_under_title_description?: null | string;
  workspace_id?: null | string;
}
