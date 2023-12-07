import { Component, Input, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MeasurementService } from 'src/api-service/iot-services/services';
import { SignalrMeasurementService } from 'src/app/services/signalr.service';

@Component({
  selector: 'app-widget-signal-speed',
  templateUrl: './widget-signal-speed.component.html',
  styleUrls: ['./widget-signal-speed.component.scss']
})
export class WidgetSignalSpeedComponent implements OnInit {

  @Input() device_id?: string;
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() widget_id = '';
  @Input() height?: number;
  @Input() widget_under_title_description?: string | null;
  @Input() data_frequency?: string | null;
  fivegStreng = 4;
  latency = 0;
  download_speed = 0;
  upload_speed = 0;
  dateTime?: Date;
  status = 'EXCELLENT';

  constructor(
    private measurementService: MeasurementService,
    private signalrMesuaService: SignalrMeasurementService,
    private ngxService: NgxUiLoaderService
  ) {}

  ngOnInit(): void {
    if (!this.data_frequency) {
      this.data_frequency = '5 mins';
    }
    this.ngxService.startLoader(this.widget_id);
    this.bindingStrength();
    this.signalrMesuaService.deviceUpdate$.subscribe((i) => {
      this.updateData(i);
    });
  }
  updateData(id: string | undefined) {
    if (this.device_id && this.device_id == id) {
      this.bindingStrength();
    }
  }
  bindingStrength() {
    this.measurementService
      .measurementFivegGet({ id: this.device_id })
      .subscribe((i) => {
        this.ngxService.stopLoader(this.widget_id);
        this.latency = i.latency!;
        this.download_speed = i.download_speed!;
        this.upload_speed = i.upload_speed!;
        this.dateTime = i.signal_datetime
          ? new Date(i.signal_datetime)
          : new Date();
      });
  }

}
