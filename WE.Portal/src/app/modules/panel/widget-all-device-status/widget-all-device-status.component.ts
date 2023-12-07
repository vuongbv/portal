import { Component, Input, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { DeviceService } from 'src/api-service/iot-services/services';

@Component({
  selector: 'app-widget-all-device-status',
  templateUrl: './widget-all-device-status.component.html',
  styleUrls: ['./widget-all-device-status.component.scss'],
})
export class WidgetAllDeviceStatusComponent implements OnInit {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() widget_id = '';
  @Input() widget_under_title_description?: string | null;
  devicesOn: number = 0;
  devicesOff: number = 0;
  constructor(
    private deviceService: DeviceService,
    private ngxService: NgxUiLoaderService
  ) {}
  ngOnInit(): void {
    this.ngxService.startLoader(this.widget_id);
    this.bindingData();
  }

  bindingData(): void {
    
    this.deviceService.deviceAlldevicestatusGet().subscribe((res) => {
      this.ngxService.stopLoader(this.widget_id);
      this.devicesOn = res.online!;
      this.devicesOff = res.offline!;
    });
  }
}
