/* tslint:disable */
/* eslint-disable */
import { TariffSettingDto } from './tariff-setting-dto';
export interface TariffSettingDtoPagedList {
  has_next_page?: boolean;
  has_previous_page?: boolean;
  index_from?: number;
  items?: null | Array<TariffSettingDto>;
  next?: null | string;
  page_index?: number;
  page_size?: number;
  previous?: null | string;
  total_count?: number;
  total_pages?: number;
}
