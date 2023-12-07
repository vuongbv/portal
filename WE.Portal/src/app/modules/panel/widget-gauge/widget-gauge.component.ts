import { Component, Input, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MeasurementService } from 'src/api-service/iot-services/services';
import { SignalrMeasurementService } from 'src/app/services/signalr.service';

@Component({
  selector: 'app-widget-gauge',
  templateUrl: './widget-gauge.component.html',
  styleUrls: ['./widget-gauge.component.scss'],
})
export class WidgetGaugeComponent implements OnInit {
  @Input() device_id?: string;
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() widget_under_title_description?: string | null;
  batteryVoltage = 0;
  @Input() widget_id = '';
  batterySeries: any[] = [];
  constructor(
    private measurementService: MeasurementService,
    private signalrMesuaService: SignalrMeasurementService,
    private ngxService: NgxUiLoaderService
  ) {}

  ngOnInit(): void {
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
          this.ngxService.stopLoader(this.widget_id)
          this.batteryVoltage = i.battery_current_voltage!;
          this.batterySeries = [
            {
              type: 'solidgauge',
              name: 'Power generated',
              marker: {
                fillColor: '#32a852',
              },
              showInLegend: true,
              data: [
                {
                  color: '#32a852',
                  radius: '105%',
                  innerRadius: '96%',
                  y: i.total_power_generated!,
                },
              ],
              events: {
                legendItemClick: () => {
                  return false;
                },
              },
            },
            {
              type: 'solidgauge',
              name: 'Battery usage',
              showInLegend: true,
              events: {
                legendItemClick: () => {
                  return false;
                },
              },
              marker: {
                fillColor: '#ffb108',
              },
              color: '#ffb108',
              data: [
                {
                  color: '#ffb108',
                  radius: '95%',
                  innerRadius: '85%',
                  y: 0,
                },
              ],
            },
          ];
        });
    }
  }
}
