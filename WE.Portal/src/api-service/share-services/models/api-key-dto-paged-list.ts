/* tslint:disable */
/* eslint-disable */
import { ApiKeyDto } from './api-key-dto';
export interface ApiKeyDtoPagedList {
  has_next_page?: boolean;
  has_previous_page?: boolean;
  index_from?: number;
  items?: null | Array<ApiKeyDto>;
  next?: null | string;
  page_index?: number;
  page_size?: number;
  previous?: null | string;
  total_count?: number;
  total_pages?: number;
}
