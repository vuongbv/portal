import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { LazyLoadEvent } from 'primeng/api';
import {
  AlarmAuditDto,
  AlarmAuditStatus,
  AlarmAuditType,
  AuditSortOrder,
} from 'src/api-service/share-services/models';
import { AuditService } from 'src/api-service/share-services/services';
import { UserInfoService } from 'src/app/services/user.service';
import { AlarmAuditStatuses, AlarmAuditTypes } from 'src/helpers/enum';

@Component({
  selector: 'app-audit-alarm',
  templateUrl: './audit-alarm.component.html',
  styleUrls: ['./audit-alarm.component.scss'],
})
export class AuditAlarmComponent implements OnInit {
  auditAlarms: AlarmAuditDto[] = [];
  start_date?: Date = new Date();
  end_date?: Date = new Date();
  status?: AlarmAuditStatus;
  device_name?: string;
  device_id?: string;
  type?: AlarmAuditType;
  total = 0;
  pageIndex = 1;
  pageSize = 10;
  sort_order?: AuditSortOrder;
  sort_by?: string;
  AlarmStatus = AlarmAuditStatuses;
  AlarmType = AlarmAuditTypes;
  constructor(
    private auditservice: AuditService,
    private userInfoService: UserInfoService,
    private ngxService: NgxUiLoaderService
  ) {}
  ngOnInit(): void {
    this.start_date?.setDate(-7);
  }
  onSearch() {
    this.sort_by = 'DeviceId';
    this.sort_order = AuditSortOrder.Ascending;
    this.pageIndex = 1;
    this.loadAudit();
  }
  loadAudit() {
    this.ngxService.startLoader('mainLoader');
    this.auditservice
      .tenantNameAuditAlarmGet({
        tenant_name: this.userInfoService.getTenantName(),
        device_id: this.device_id,
        device_name: this.device_name,
        end_date: this.end_date?.toISOString(),
        start_date: this.start_date?.toISOString(),
        page_index: this.pageIndex,
        page_size: this.pageSize,
        status: this.status,
        audit_type: this.type,
        sort_order: this.sort_order,
        sort_by: this.sort_by,
      })
      .subscribe((i) => {
        this.ngxService.stopLoader('mainLoader');
        this.auditAlarms = i.items!;
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
