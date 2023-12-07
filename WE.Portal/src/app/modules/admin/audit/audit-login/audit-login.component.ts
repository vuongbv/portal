import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { LazyLoadEvent } from 'primeng/api';
import {
  AuditSortOrder,
  LastLoginAuditDto,
} from 'src/api-service/share-services/models';
import { AuditService } from 'src/api-service/share-services/services';
import { UserInfoService } from 'src/app/services/user.service';

@Component({
  selector: 'app-audit-login',
  templateUrl: './audit-login.component.html',
  styleUrls: ['./audit-login.component.scss'],
})
export class AuditLoginComponent implements OnInit {
  auditLogins: LastLoginAuditDto[] = [];
  total = 0;
  pageIndex = 1;
  pageSize = 10;
  sort_order?: AuditSortOrder;
  sort_by?: string;
  user_name?: string;
  email?: string;
  start_date?: Date = new Date();
  end_date?: Date = new Date();

  constructor(
    private auditservice: AuditService,
    private userInfoService: UserInfoService,
    private ngxService: NgxUiLoaderService
  ) {}
  ngOnInit(): void {
    this.start_date?.setDate(-7);
  }
  onSearch() {
    this.sort_by = 'UserName';
    this.sort_order = AuditSortOrder.Ascending;
    this.pageIndex = 1;
    this.loadAudit();
  }
  loadAudit() {
    this.ngxService.startLoader('mainLoader');
    this.auditservice
      .tenantNameAuditLastLoginGet({
        tenant_name: this.userInfoService.getTenantName(),
        user_name: this.user_name,
        email: this.email,
        end_date: this.end_date?.toISOString(),
        start_date: this.start_date?.toISOString(),
        page_index: this.pageIndex,
        page_size: this.pageSize,
        sort_order: this.sort_order,
        sort_by: this.sort_by,
      })
      .subscribe((i) => {
        this.ngxService.stopLoader('mainLoader');
        this.auditLogins = i.items!;
        this.total = i.total_count!;
      });
  }
  loadData(e: LazyLoadEvent) {
    this.sort_by = e.sortField;
    this.sort_order =
      e.sortOrder == 1 ? AuditSortOrder.Ascending : AuditSortOrder.Descending;
    this.pageIndex = e.first == 0 ? 1 : e.first! / e.rows!;
    (this.pageSize = e.rows!), this.loadAudit();
  }
}
