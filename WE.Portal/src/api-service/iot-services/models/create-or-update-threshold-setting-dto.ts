/* tslint:disable */
/* eslint-disable */
import { Action } from './action';
import { CreateOrUpdateThresholdSettingModel } from './create-or-update-threshold-setting-model';
import { Operator } from './operator';
export interface CreateOrUpdateThresholdSettingDto {
  actions?: null | Array<Action>;
  criteria?: null | string;
  device?: null | string;
  device_name?: null | string;
  geometry?: null | string;
  id?: null | string;
  operator?: Operator;
  value?: CreateOrUpdateThresholdSettingModel;
  value_equal?: null | string;
  value_from?: null | number;
  value_to?: null | number;
}
