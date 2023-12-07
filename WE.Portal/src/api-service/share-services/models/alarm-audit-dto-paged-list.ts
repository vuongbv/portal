/* tslint:disable */
/* eslint-disable */
import { AlarmAuditDto } from './alarm-audit-dto';
export interface AlarmAuditDtoPagedList {
  has_next_page?: boolean;
  has_previous_page?: boolean;
  index_from?: number;
  items?: null | Array<AlarmAuditDto>;
  next?: null | string;
  page_index?: number;
  page_size?: number;
  previous?: null | string;
  total_count?: number;
  total_pages?: number;
}
