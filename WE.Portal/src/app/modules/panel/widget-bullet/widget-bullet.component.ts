import { Component, Input, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MeasurementService } from 'src/api-service/iot-services/services';
import { SignalrMeasurementService } from 'src/app/services/signalr.service';

@Component({
  selector: 'app-widget-bullet',
  templateUrl: './widget-bullet.component.html',
  styleUrls: ['./widget-bullet.component.scss'],
})
export class WidgetBulletComponent implements OnInit {
  @Input() device_id?: string;
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() widget_id='';
  @Input() widget_under_title_description?: string | null;
  enclousureSeries: any[] = [];
  SolarSeries: any[] = [];
  constructor(
    private measurementService: MeasurementService,
    private signalrMesuaService: SignalrMeasurementService,
    private ngxService: NgxUiLoaderService
  ) {}

  ngOnInit(): void {
    this.ngxService.startLoader(this.widget_id);
    this.bindingTemperature();
    this.signalrMesuaService.deviceUpdate$.subscribe((i) => {
      this.updateData(i);
    });
  }
  updateData(id: string) {
    if (this.device_id && this.device_id == id) {
      this.bindingTemperature();
    }
  }
  bindingTemperature() {
    
    this.measurementService
      .measurementTemperatureGet({ id: this.device_id })
      .subscribe((i) => {
        this.ngxService.stopLoader(this.widget_id)
        this.enclousureSeries = [
          {
            type: 'bullet',
            data: [{ y: i.enclosure, target: 50 }],
          },
        ];
        this.SolarSeries = [
          {
            type: 'bullet',
            data: [{ y: i.solar, target: 50 }],
          },
        ];
      });
  }
}
