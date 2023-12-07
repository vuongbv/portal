import { Component, Input, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Periodicity } from 'src/api-service/iot-services/models';
import { MeasurementService } from 'src/api-service/iot-services/services';
import {
  DataAggregateType,
  DataResultType,
  WidgetSetting,
  WidgetType,
} from 'src/api-service/share-services/models';
import { PowerType } from 'src/api-service/share-services/models/power-type';

import { SignalrMeasurementService } from 'src/app/services/signalr.service';
import { getWidgetSetting } from 'src/helpers/fn';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-widget-stat',
  templateUrl: './widget-stat.component.html',
  styleUrls: ['./widget-stat.component.scss'],
})
export class WidgetStatComponent implements OnInit {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() device_id = '';
  @Input() widget_id = '';
  @Input() power_type?: PowerType;
  @Input() periodicity?: Periodicity;
  @Input() data_path?: string | null;
  @Input() data_point?: string | null;
  @Input() sub_id?: string | null;
  @Input() data_aggregate_type?: DataAggregateType;
  @Input() data_result_type?: DataResultType;
  @Input() unit?: string | null;
  @Input() widget_type?: WidgetType;
  @Input() widget_setting?: WidgetSetting;
  @Input() data_icon: any = '';
  @Input() formular?: string | null;
  @Input() data_frequency?: string | null;
  @Input() widget_under_title_description?: string | null;
  currentDate = new Date();
  data = 0;
  currency = '';
  channel_name: [] = [];
  date?: Date;
  formatDecimal: string = '';
  textColor: string = '';

  constructor(
    private measurementService: MeasurementService,
    private signalrMesuaService: SignalrMeasurementService,
    private ngxService: NgxUiLoaderService,
    private sanitizer: DomSanitizer
  ) {
    this.signalrMesuaService.deviceUpdate$.subscribe((i) => {
      this.updateData(i);
    });
  }

  ngOnInit(): void {
    if (!this.data_frequency) {
      this.data_frequency = '5 mins';
    }
    this.ngxService.startLoader(this.widget_id);
    if (this.widget_type == WidgetType.SingleValue) {
      this.loadSigleValue();
    } else {
      this.loadMeasurementPower(this.periodicity!);
    }

    if (this.data_icon)
      this.sanitizer.bypassSecurityTrustResourceUrl(this.data_icon);
  }

  updateData(id: string | undefined) {
    if (this.device_id && this.device_id == id) {
      this.loadSigleValue();
    }
  }

  loadSigleValue() {
    this.measurementService
      .measurementSinglevaluedataGet({
        source_id: this.device_id,
        data_path: this.data_path!,
        data_point: this.data_point!,
        data_aggregate_type: this.data_aggregate_type,
        periodicity: this.periodicity,
        time_offset: (this.currentDate.getTimezoneOffset() * -1) / 60,
        data_result_type: this.data_result_type,
        sub_id: this.sub_id!,
        formular: this.formular ?? '',
      })
      .subscribe((i) => {
        this.ngxService.stopLoader(this.widget_id);
        this.currency = this.unit ?? '';
        this.data = i.value || 0;
        if (this.data_aggregate_type == DataAggregateType.Current) {
          this.date = i.time ? new Date(i.time!) : new Date();
        }
        this.getSetting();
      });
  }

  loadMeasurementPower(periodicity: Periodicity) {
    this.measurementService
      .measurementTotalPowerGet({
        id: this.device_id,
        channel_names: this.channel_name,
        periodicity: periodicity,
      })
      .subscribe((i) => {
        this.ngxService.stopLoader(this.widget_id);
        const result = i as any;
        if (i) {
          let property = '';
          switch (this.power_type) {
            case PowerType.Current:
              property = 'avg_current';
              this.currency = 'A';
              break;
            case PowerType.Power:
              property = 'total_power';
              this.currency = 'W';
              break;
            case PowerType.Voltage:
              property = 'avg_voltage';
              this.currency = 'V';
              break;
            case PowerType.Money:
              property =
                periodicity == Periodicity.Monthly
                  ? 'current_potential_saving'
                  : 'total_potential_saving';
              this.currency = '$';
              break;
          }
          this.date = i.time ? new Date(i.time) : new Date();
          this.data = result[property] ? result[property] : 0;
          this.getSetting();
        }
      });
  }

  getSetting() {
    if (this.widget_setting) {
      this.formatDecimal = String(
        getWidgetSetting(this.widget_setting, this.data)?.decimal
      );
      this.textColor = String(
        getWidgetSetting(this.widget_setting, this.data)?.color
      );
    }
  }
}
