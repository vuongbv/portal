import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService, LazyLoadEvent } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import {
  AlarmRecepient,
  AlarmRecepientDto,
} from 'src/api-service/iot-services/models';
import { TenantSettingService } from 'src/api-service/iot-services/services';
import { TenantService } from 'src/api-service/share-services/services';
import { ToastService } from 'src/helpers/services/toast.service';
import { EmailSettingComponent } from '../email-setting/email-setting.component';

@Component({
  selector: 'app-email-setting-list',
  templateUrl: './email-setting-list.component.html',
  styleUrls: ['./email-setting-list.component.scss'],
})
export class EmailSettingListComponent implements OnInit {
  alarmRecepient: AlarmRecepientDto[] = [];

  pageindex = 1;
  pagesize = 10;
  total = 0;
  constructor(
    private tenantSettingService: TenantSettingService,
    private dialogservice: DialogService,
    private toastService: ToastService,
    public confirmService: ConfirmationService
  ) {}

  ngOnInit(): void {}
  loadAlarmRecepient() {
    this.tenantSettingService
      .tenantsettingAlarmrecepientSearchGet({
        page_size: this.pagesize,
        page_index: this.pageindex,
      })
      .subscribe((i) => {
        this.alarmRecepient = i.items!;
        this.total = i.total_count!;
      });
  }
  lazyLoadTabel(event: LazyLoadEvent) {
    this.pageindex = event.first != 0 ? event.first! / event.rows! + 1 : 1;
    this.pagesize = event.rows!;
    this.loadAlarmRecepient();
  }
  edit(id: string) {
    this.opendialog(id);
  }

  addNew() {
    this.opendialog(null);
  }

  onSearch() {
    this.loadAlarmRecepient();
  }
  onDelete(id: string) {
    this.confirmService.confirm({
      message: 'Are you sure you want to delete this item?',
      accept: () => {
        this.tenantSettingService
          .tenantsettingAlarmrecepientDelete({ id: id })
          .subscribe((i) => {
            this.toastService.success('Delete successfully'); 
            this.loadAlarmRecepient()
          });
      },
    });
  }
  private opendialog(id: string | null) {
    const ref = this.dialogservice.open(EmailSettingComponent, {
      data: { id: id },
      header: 'Edit ',
      width: '50%',
      position: 'top',
      maximizable: true,
    });
    ref.onClose.subscribe((r) => {
      if (r) {
        this.pageindex = 1
        this.loadAlarmRecepient();
      }
    });
  }
}
