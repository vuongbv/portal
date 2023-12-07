/* tslint:disable */
/* eslint-disable */
import { ChartType } from './chart-type';
import { DataAggregateType } from './data-aggregate-type';
import { DataResultType } from './data-result-type';
import { Periodicity } from './periodicity';
import { PowerType } from './power-type';
import { WidgetType } from './widget-type';
export interface CreateWidgetTemplateModel {
  chart_type?: ChartType;
  data_aggregate_type?: DataAggregateType;
  data_point?: null | string;
  data_result_type?: DataResultType;
  periodicity?: Periodicity;
  power_type?: PowerType;
  template_name?: null | string;
  widget_data_icon?: null | string;
  widget_description?: null | string;
  widget_name?: null | string;
  widget_type?: WidgetType;
}
