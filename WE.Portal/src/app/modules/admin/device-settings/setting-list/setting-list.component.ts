import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { AlarmSettingDto } from 'src/api-service/iot-services/models';
import { AlarmSettingService, TenantSettingService } from 'src/api-service/iot-services/services';
import { GroupDto } from 'src/api-service/share-services/models';
import { ToastService } from 'src/helpers/services/toast.service';
import { SettingFormComponent } from '../setting-form/setting-form.component';

@Component({
  selector: 'app-setting-list',
  templateUrl: './setting-list.component.html',
  styleUrls: ['./setting-list.component.scss'],
})
export class SettingListComponent implements OnInit {
  DeviceSettings: AlarmSettingDto[] = [];
  //users: UserDto[] = [];
  pageindex = 1;
  pagesize = 10;
  total = 0;
  constructor(
    private alarmSetingService: TenantSettingService,
    private dialogservice: DialogService,
    private confirmService: ConfirmationService,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
    this.onSearch();
  }
  
  onSearch() {
    this.alarmSetingService
      .tenantsettingThresholdGet({ page_index: this.pageindex, page_size: this.pagesize  })
      .subscribe((i) => {
        this.DeviceSettings = i.items!;
        this.DeviceSettings
        this.total = i.total_count!;
      });
  }

  onSearchForEdit() {
    this.alarmSetingService
      .tenantsettingThresholdGet({ page_index: this.pageindex, page_size: this.pagesize  })
      .subscribe((i) => {
        this.DeviceSettings = i.items!;
        this.DeviceSettings
        this.total = i.total_count!;
      });
  }

  edit(id: string) {
    this.opendialogForEdit(id);
  }

  lazyLoadTabel(event: any) {
    this.pageindex = event.first != 0 ?event.first! / event.rows! + 1 : 1;
    this.pagesize = event.rows!;
    this.onSearch();
  }

  addNew() {
    this.opendialog(null);
  }

  delete(id: string) {
    this.confirmService.confirm({
      message: 'Are you sure that you want to deleted',
      accept: () => {
        this.alarmSetingService
          .tenantsettingThresholdDelete({ id: id })
          .subscribe((i) => {
            this.toastService.success('delete alarm setting successfull');
            this.onSearch();
          });
      },
    });
  }

  private opendialog(id: string | null) {
    var ref = this.dialogservice.open(SettingFormComponent, {
      data: { id: id },
      header: id ? 'Edit Threshold Setting' : 'Add Threshold Setting',
      width: '50%',
      position: 'top',
      maximizable: true,
    });
    ref.onClose.subscribe((r) => {
      if (r) {
        this.onSearch();
      }
    });
  }

  private opendialogForEdit(id: string | null) {
    var ref = this.dialogservice.open(SettingFormComponent, {
      data: { id: id },
      header: id ? 'Edit Threshold Setting' : 'Add Threshold Setting',
      width: '50%',
      position: 'top',
      maximizable: true,
    });
    ref.onClose.subscribe((r) => {
      if (r) {
        this.onSearchForEdit();
      }
    });
  }
}
