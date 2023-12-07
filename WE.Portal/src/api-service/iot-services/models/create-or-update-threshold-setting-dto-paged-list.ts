/* tslint:disable */
/* eslint-disable */
import { CreateOrUpdateThresholdSettingDto } from './create-or-update-threshold-setting-dto';
export interface CreateOrUpdateThresholdSettingDtoPagedList {
  has_next_page?: boolean;
  has_previous_page?: boolean;
  index_from?: number;
  items?: null | Array<CreateOrUpdateThresholdSettingDto>;
  next?: null | string;
  page_index?: number;
  page_size?: number;
  previous?: null | string;
  total_count?: number;
  total_pages?: number;
}
