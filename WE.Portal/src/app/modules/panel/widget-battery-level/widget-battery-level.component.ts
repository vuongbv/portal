import { Component, Input, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MeasurementService } from 'src/api-service/iot-services/services';
import { WidgetSetting } from 'src/api-service/share-services/models';

import { SignalrMeasurementService } from 'src/app/services/signalr.service';
import { getWidgetSetting } from 'src/helpers/fn';

@Component({
  selector: 'app-widget-battery-level',
  templateUrl: './widget-battery-level.component.html',
  styleUrls: ['./widget-battery-level.component.scss'],
})
export class WidgetBatteryLevelComponent implements OnInit {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() device_id?: string;
  @Input() widget_id = '';
  @Input() widget_setting?: WidgetSetting;
  @Input() data_frequency?:string|null
  @Input() widget_under_title_description?: string | null;
  value = 0;
  valuePercent = 0;
  dateTime = new Date();
  formatDecimal: string = '';
  textColor: string = '';

  constructor(
    private measurementService: MeasurementService,
    private signalrMesuaService: SignalrMeasurementService,
    private ngxService: NgxUiLoaderService
  ) {}

  ngOnInit(): void {
    if(!this.data_frequency){
      this.data_frequency = "5 mins"
    }
    this.ngxService.startLoader(this.widget_id);
    this.bindindData();
    this.signalrMesuaService.deviceUpdate$.subscribe((i) => {
      this.updateData(i);
    });
  }
  updateData(id: string) {
    if (this.device_id && this.device_id == id) {
      this.bindindData();
    }
  }
  bindindData() {
    if (this.device_id) {
      this.measurementService
        .measurementBatteryGet({ id: this.device_id })
        .subscribe((i) => {
          this.ngxService.stopLoader(this.widget_id);
          this.value = i.battery_current_voltage!;
          this.dateTime = i.data_time ? new Date(i.data_time) : new Date();

          if (this.value >= 13.4 && this.value < 13.6) this.valuePercent = 99;
          if (this.value >= 13.3 && this.value < 13.4) this.valuePercent = 90;
          if (this.value >= 13.2 && this.value < 13.3) this.valuePercent = 70;
          if (this.value >= 13.16 && this.value < 13.2) this.valuePercent = 60;
          if (this.value >= 13.13 && this.value < 13.16) this.valuePercent = 50;
          if (this.value >= 13.1 && this.value < 13.13) this.valuePercent = 40;
          if (this.value >= 12.9 && this.value < 13.1) this.valuePercent = 20;
          if (this.value >= 12.8 && this.value < 12.9) this.valuePercent = 17;
          if (this.value >= 12.5 && this.value < 12.8) this.valuePercent = 14;
          if (this.value >= 12.0 && this.value < 12.5) this.valuePercent = 9;
          if (this.value >= 10.0 && this.value < 12.0) this.valuePercent = 0;
          if (this.value >= 13.6) this.valuePercent = 100;

          this.getSetting();
        });
    }
  }

  getSetting() {
    if (this.widget_setting) {
      this.formatDecimal = String(
        getWidgetSetting(this.widget_setting, this.value)?.decimal
      );
      this.textColor = String(
        getWidgetSetting(this.widget_setting, this.value)?.color
      );
    }
  }
}
