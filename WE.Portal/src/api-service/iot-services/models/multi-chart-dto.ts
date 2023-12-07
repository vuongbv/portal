/* tslint:disable */
/* eslint-disable */
import { SingleChartDto } from './single-chart-dto';
export interface MultiChartDto {
  color?: null | string;
  indicator_name?: null | string;
  unit?: null | string;
  values?: null | Array<SingleChartDto>;
}
