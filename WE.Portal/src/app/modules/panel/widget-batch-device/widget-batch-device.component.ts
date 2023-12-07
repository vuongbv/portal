import { Component, Input, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import {
  DevicePowerStatus,
  DevicesPowerModel,
  OperationDto,
} from 'src/api-service/iot-services/models';
import {
  OperationService,
  TenantSettingService,
} from 'src/api-service/iot-services/services';
import { ToastService } from 'src/helpers/services/toast.service';

@Component({
  selector: 'app-widget-batch-device',
  templateUrl: './widget-batch-device.component.html',
  styleUrls: ['./widget-batch-device.component.scss'],
})
export class WidgetBatchDeviceComponent implements OnInit {
  constructor(
    private tenantSetingSevice: TenantSettingService,
    private operationService: OperationService,
    private toastService: ToastService
  ) {}
  @Input() widget_under_title_description?: string | null;
  zones: TreeNode[] = [];
  commands: OperationDto[] = [];
  end_date?: Date;
  start_date?: Date;
  status = false;
  selectedZone: any[] = [];
  minDate = new Date();
  pin_number = '';
  ngOnInit(): void {
    this.loadBatch();
    this.loadCommands();
  }
  loadCommands() {
    this.operationService
      .operationIdGet({ id: '' })
      .subscribe((i) => (this.commands = i.gt_device_commands!));
  }
  loadBatch() {
    this.tenantSetingSevice.tenantsettingPowerBatchGet().subscribe((i) => {
      const all: TreeNode = {
        label: i.all?.zone_name!,
        children: [],
        key: 'zone',
      };
      i.all?.devices?.forEach((n) => {
        all.children?.push({
          label: n.device_name!,
          data: n,
          type: 'device',
          key: n.device_name!,
        });
      });
      this.zones.push(all);
      i.zones?.forEach((i) => {
        const note: TreeNode = {
          label: i.zone_name!,
          children: [],
          key: i.zone_name!,
        };
        i.devices?.forEach((n) => {
          note.children?.push({
            label: n.device_name! + ' - ' + n.status,
            data: n,
            type: 'device',
            key: n.device_name!,
          });
        });
        this.zones.push(note);
      });
    });
  }
  save() {
    var data: DevicesPowerModel[] = this.selectedZone
      .filter((i) => i.type == 'device')
      .map((i: any) => {
        return {
          device_id: i.data.device_id,
          pin_state: this.status ? DevicePowerStatus.On : DevicePowerStatus.Off,
          start_date: this.start_date?.toISOString(),
          pin_number: 'PD21',
          end_date: this.end_date?.toISOString(),
        };
      });
    this.operationService
      .operationBatchPost({ body: data })
      .subscribe((res) => {
        this.toastService.success('Update Status succesfully');
      });
  }
  cancelOperation(cno: string) {
    const params = {
      cno,
    };

    this.operationService.operationCancelCnoGet(params).subscribe((res) => {
      if (!res) return;
      this.toastService.success(res);
    });
  }
}
