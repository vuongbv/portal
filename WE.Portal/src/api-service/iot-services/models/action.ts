/* tslint:disable */
/* eslint-disable */
import { ActionType } from './action-type';
import { SeverityType } from './severity-type';
export interface Action {
  alarm_type?: null | string;
  description?: null | string;
  frequency?: null | number;
  last_trigger?: null | string;
  recipient?: null | string;
  severity_type?: SeverityType;
  type?: ActionType;
}
