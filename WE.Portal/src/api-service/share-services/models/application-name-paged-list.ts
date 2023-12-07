/* tslint:disable */
/* eslint-disable */
import { ApplicationName } from './application-name';
export interface ApplicationNamePagedList {
  has_next_page?: boolean;
  has_previous_page?: boolean;
  index_from?: number;
  items?: null | Array<ApplicationName>;
  next?: null | string;
  page_index?: number;
  page_size?: number;
  previous?: null | string;
  total_count?: number;
  total_pages?: number;
}
