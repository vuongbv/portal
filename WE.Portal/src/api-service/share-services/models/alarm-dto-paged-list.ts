/* tslint:disable */
/* eslint-disable */
import { AlarmDto } from './alarm-dto';
export interface AlarmDtoPagedList {
  has_next_page?: boolean;
  has_previous_page?: boolean;
  index_from?: number;
  items?: null | Array<AlarmDto>;
  next?: null | string;
  page_index?: number;
  page_size?: number;
  previous?: null | string;
  total_count?: number;
  total_pages?: number;
}
