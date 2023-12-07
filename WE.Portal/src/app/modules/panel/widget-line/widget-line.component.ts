import { Component, Input, OnInit } from '@angular/core';
import { YAxisOptions } from 'highcharts';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import {
  ChartStyleSettingDto,
  DataAggregateType,
} from 'src/api-service/iot-services/models';
import {
  MeasurementService,
  TenantSettingService,
} from 'src/api-service/iot-services/services';
import {
  DataResultType,
  Periodicity,
  PowerType,
  WidgetType,
} from 'src/api-service/share-services/models';
import { SignalrMeasurementService } from 'src/app/services/signalr.service';

@Component({
  selector: 'app-widget-line',
  templateUrl: './widget-line.component.html',
  styleUrls: ['./widget-line.component.scss'],
})
export class WidgetLineComponent implements OnInit {
  @Input() device_id?: string;
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() data_point?: string | null;
  @Input() data_result_type?: DataResultType;
  @Input() data_aggregate_type?: DataAggregateType;
  @Input() power_type?: PowerType;
  @Input() ref_id?: string | null;
  @Input() widget_id = '';
  @Input() widget_type?: WidgetType;
  @Input() periodicity?: Periodicity;
  @Input() data_path?: string | null;
  @Input() chart_style_setting_id?: string | null;
  @Input() sub_id?: string | null;
  @Input() unit?: string | null;
  @Input() formular?: string | null;
  @Input() line_name?: string | null;
  @Input() widget_under_title_description?: string | null;
  constructor(
    private measurementService: MeasurementService,
    private signalrMesuaService: SignalrMeasurementService,
    private ngxService: NgxUiLoaderService,
    private tenantSettingService: TenantSettingService
  ) {}
  series: any[] = [];
  yAxis: YAxisOptions[] = [];
  catalog?: any[];
  currentDate = new Date();
  styleSeting?: ChartStyleSettingDto;
  ngOnInit(): void {
    this.ngxService.startLoader(this.widget_id);
    if (this.chart_style_setting_id) {
      this.tenantSettingService
        .tenantsettingChartstylesettingGet({ id: this.chart_style_setting_id })
        .subscribe((i) => (this.styleSeting = i));
    }
    if (this.widget_type == WidgetType.Chart) {
      if (!this.power_type) {
        this.bindingHourlyFiveg();
      } else {
        this.bindingPower();
      }
    } else if (this.widget_type == WidgetType.SingleChart) {
      this.bindingSingleChart();
    } else if (this.widget_type == WidgetType.MultiChart) {
      this.bindingMultiChart();
    }

    this.signalrMesuaService.deviceUpdate$.subscribe((i) => {
      this.updateData(i);
    });
  }

  bindingSingleChart() {
    this.measurementService
      .measurementSinglechartdataGet({
        data_aggregate_type: this.data_aggregate_type,
        data_path: this.data_path!,
        data_point: this.data_point!,
        data_result_type: this.data_result_type,
        periodicity: this.periodicity,
        source_id: this.device_id,
        sub_id: this.sub_id!,
        time_offset: (this.currentDate.getTimezoneOffset() * -1) / 60,
        formular: this.formular ?? '',
      })
      .subscribe((i) => {
        this.ngxService.stopLoader(this.widget_id);
        this.yAxis = [
          {
            title: {
              text: this.unit,
              style: { color: 'white' }
            },
          },
        ];
        this.series = [
          {
            name: this.title,
            type: 'line',
            data: i.map((n) => {
              return [new Date(n.point!).getTime(), n.value];
            }),
          },
        ];
      });
  }

  updateData(id: string) {
    if (this.device_id && this.device_id == id) {
      if (this.widget_type == WidgetType.Chart) {
        if (!this.power_type) {
          this.bindingHourlyFiveg();
        } else {
          this.bindingPower();
        }
      } else if (this.widget_type == WidgetType.SingleChart) {
        this.bindingSingleChart();
      } else if (this.widget_type == WidgetType.MultiChart) {
        this.bindingMultiChart();
      }
    }
  }

  bindingHourlyFiveg() {
    const diff = (this.currentDate.getTimezoneOffset() * -1) / 60;

    this.measurementService
      .measurementSinglechartdataGet({
        source_id: this.device_id,
        data_result_type: this.data_result_type,
        data_point: this.data_point!,
        time_offset: diff,
        formular: this.formular ?? '',
      })
      .subscribe((i) => {
        this.ngxService.stopLoader(this.widget_id);
        this.series = [
          {
            name: this.title,
            type: this.line_name,
            data: i.map((n) => {
              return [`${n.point}:00`, n.value];
            }),
          },
        ];
        this.catalog = i.map((n) => {
          return `${n.point}:00`;
        });
      });
  }

  bindingPower() {
    this.yAxis = [
      {
        title: {
          text: this.unit,
          style: { color: 'white' }
        },
      },
    ];

    this.measurementService
      .measurementPowerhourlyGet({
        id: this.device_id,
        ref_id: this.ref_id!,
      })
      .subscribe((i) => {
        this.ngxService.stopLoader(this.widget_id);
        this.series = [
          {
            name: 'Power',
            type: 'line',
            yAxis: 0,
            data: i.total_power?.map((n) => {
              return [new Date(n._id!).getTime(), n.value];
            }),
          },
        ];
        if (i.sun_light) {
          if (this.yAxis.length <= 2) {
            this.yAxis?.push({
              title: {
                text: this.unit,
                style: { color: 'white' }
              },
              opposite: true,
            });
          }
          this.series.push({
            name: 'Sun Light',
            type: 'line',
            yAxis: 1,
            color: 'orange',
            data: i.sun_light?.map((n) => {
              return [new Date(n._id!).getTime(), n.value];
            }),
          });
        }
      });
  }

  bindingMultiChart() {
    this.measurementService
      .measurementGetmultichartdataGet({
        widget_id: this.widget_id,
        data_aggregate_type: this.data_aggregate_type,
        data_path: this.data_path!,
        data_point: this.data_point!,
        data_result_type: this.data_result_type,
        periodicity: this.periodicity,
        source_id: this.device_id,
        sub_id: this.sub_id!,
        time_offset: (this.currentDate.getTimezoneOffset() * -1) / 60,
        formular: this.formular ?? '',
      })
      .subscribe((i: any) => {
        this.ngxService.stopLoader(this.widget_id);
        this.yAxis = i.map((data: any, index: number) => {
          return {
            title: {
              text: data.unit,
              style: {
                color: data.color,
              },
            },
            labels: {
              style: {
                color: data.color,
              },
            },
            opposite: index !== 0 ? true : false,
          };
        });
        // .filter(
        //   (value: any, index: number, self: any) =>
        //     index === self.findIndex((v: any) => v.title?.text === value.title?.text)
        // );
        this.series = i.map((data: any, index: number) => {
          return {
            name: data.indicator_name,
            type: 'line',
            color: data.color,
            data: data.values.map((n: any) => {
              return [new Date(n.point!).getTime(), n.value];
            }),
            yAxis: index,
          };
        });
      });
  }
}
