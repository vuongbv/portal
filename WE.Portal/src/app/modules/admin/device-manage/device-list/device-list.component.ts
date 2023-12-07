import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { DeviceDto } from 'src/api-service/iot-services/models';
import { DeviceService } from 'src/api-service/iot-services/services';

import { ToastService } from 'src/helpers/services/toast.service';
import { DeviceFormComponent } from '../device-form/device-form.component';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss'],
})
export class DeviceListComponent implements OnInit {
  devices: DeviceDto[] = [];

  pageindex = 1;
  pagesize = 10;
  total = 0;
  constructor(
    private deviceService: DeviceService,
    private dialogservice: DialogService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {}
  loadDevices(sortOrder: boolean, sortField: string) {
    this.deviceService
      .deviceGet({
        page_size: this.pagesize,
        page_index: this.pageindex,
        order_by: sortField,
        is_desc: sortOrder,
      })
      .subscribe((i) => {
        this.devices = i.items!;
        this.total = i.total_count!;
      });
  }
  lazyLoadTabel(event: LazyLoadEvent) {
    this.pageindex = event.first != 0 ? event.first! / event.rows! + 1 : 1;
    this.pagesize = event.rows!;
    this.loadDevices(event.sortOrder == 1, event.sortField!);
  }
  edit(id: string) {
    this.opendialog(id);
  }

  addNew() {
    this.opendialog(null);
  }

  onSearch() {
    this.loadDevices(true, 'Name');
  }

  private opendialog(id: string | null) {
    const ref = this.dialogservice.open(DeviceFormComponent, {
      data: { id: id },
      header: 'Edit Device',
      width: '50%',
      position: 'top',
      maximizable: true,
    });
    ref.onClose.subscribe((r) => {
      if (r) {
        this.pageindex = 1
        this.loadDevices(true, 'Name');
      }
    });
  }
}
