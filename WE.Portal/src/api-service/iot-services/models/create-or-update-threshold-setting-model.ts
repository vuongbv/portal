/* tslint:disable */
/* eslint-disable */
import { Action } from './action';
import { Operator } from './operator';
export interface CreateOrUpdateThresholdSettingModel {
  actions?: null | Array<Action>;
  criteria?: null | string;
  device?: null | string;
  geometry?: null | string;
  operator?: Operator;
  value_equal?: null | string;
  value_from?: null | number;
  value_to?: null | number;
}
