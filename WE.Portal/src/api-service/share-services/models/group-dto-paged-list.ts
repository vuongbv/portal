/* tslint:disable */
/* eslint-disable */
import { GroupDto } from './group-dto';
export interface GroupDtoPagedList {
  has_next_page?: boolean;
  has_previous_page?: boolean;
  index_from?: number;
  items?: null | Array<GroupDto>;
  next?: null | string;
  page_index?: number;
  page_size?: number;
  previous?: null | string;
  total_count?: number;
  total_pages?: number;
}
