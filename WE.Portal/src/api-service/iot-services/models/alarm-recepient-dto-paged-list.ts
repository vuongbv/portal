/* tslint:disable */
/* eslint-disable */
import { AlarmRecepientDto } from './alarm-recepient-dto';
export interface AlarmRecepientDtoPagedList {
  has_next_page?: boolean;
  has_previous_page?: boolean;
  index_from?: number;
  items?: null | Array<AlarmRecepientDto>;
  next?: null | string;
  page_index?: number;
  page_size?: number;
  previous?: null | string;
  total_count?: number;
  total_pages?: number;
}
