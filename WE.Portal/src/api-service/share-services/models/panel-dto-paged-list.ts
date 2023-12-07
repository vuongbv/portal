/* tslint:disable */
/* eslint-disable */
import { PanelDto } from './panel-dto';
export interface PanelDtoPagedList {
  has_next_page?: boolean;
  has_previous_page?: boolean;
  index_from?: number;
  items?: null | Array<PanelDto>;
  next?: null | string;
  page_index?: number;
  page_size?: number;
  previous?: null | string;
  total_count?: number;
  total_pages?: number;
}
