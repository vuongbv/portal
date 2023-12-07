/* tslint:disable */
/* eslint-disable */
import { RoleAuditDto } from './role-audit-dto';
export interface RoleAuditDtoPagedList {
  has_next_page?: boolean;
  has_previous_page?: boolean;
  index_from?: number;
  items?: null | Array<RoleAuditDto>;
  next?: null | string;
  page_index?: number;
  page_size?: number;
  previous?: null | string;
  total_count?: number;
  total_pages?: number;
}
