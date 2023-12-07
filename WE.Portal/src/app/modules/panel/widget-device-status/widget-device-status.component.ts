import { Component, Input, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { DeviceService } from 'src/api-service/iot-services/services';
import { SignalrMeasurementService } from 'src/app/services/signalr.service';

@Component({
  selector: 'app-widget-device-status',
  templateUrl: './widget-device-status.component.html',
  styleUrls: ['./widget-device-status.component.scss'],
})
export class WidgetDeviceStatusComponent implements OnInit {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() device_id?: string;
  @Input() widget_id = '';
  @Input() data_frequency?: string | null;
  @Input() widget_under_title_description?: string | null;
  uptime?: string;
  operationStatus?: string;
  date?: Date;
  constructor(
    private deviceService: DeviceService,
    private signalrMesuaService: SignalrMeasurementService,
    private ngxService: NgxUiLoaderService
  ) {}

  ngOnInit(): void {
    if (!this.data_frequency) {
      this.data_frequency = '5 mins';
    }
    this.ngxService.startLoader(this.widget_id);
    this.bindingData();
    this.signalrMesuaService.deviceUpdate$.subscribe((i) => {
      this.updateData(i);
    });
  }
  updateData(id: string) {
    if (this.device_id && this.device_id == id) {
      this.bindingData();
    }
  }

  bindingData() {
    if (this.device_id) {
      this.deviceService
        .deviceSourceIdSourceGet({ source_id: this.device_id })
        .subscribe((res) => {
          this.ngxService.stopLoader(this.widget_id);
          this.operationStatus = res.operation_status!;
          this.uptime = res.uptime!;
          this.date = res.updated_date ? new Date(res.updated_date) : new Date();
        });
    }
  }
}
