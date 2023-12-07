/* tslint:disable */
/* eslint-disable */
import { LastLoginAuditDto } from './last-login-audit-dto';
export interface LastLoginAuditDtoPagedList {
  has_next_page?: boolean;
  has_previous_page?: boolean;
  index_from?: number;
  items?: null | Array<LastLoginAuditDto>;
  next?: null | string;
  page_index?: number;
  page_size?: number;
  previous?: null | string;
  total_count?: number;
  total_pages?: number;
}
