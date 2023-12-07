import { HttpContext } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Periodicity } from 'src/api-service/iot-services/models';
import {
  DeviceService,
  MeasurementService,
} from 'src/api-service/iot-services/services';
import { DeviceDto } from 'src/api-service/share-services/models';
import { Periodicities } from 'src/helpers/enum';

@Component({
  selector: 'app-exports',
  templateUrl: './exports.component.html',
  styleUrls: ['./exports.component.scss'],
})
export class ExportsComponent implements OnInit {
  startDate?: Date;
  endDate?: Date;
  devices: DeviceDto[] = [];
  selectedDevice?: string;
  periodicities = Periodicities;
  selectedPeriodicted?: Periodicity;
  dataType?: string;
  constructor(
    private deviceService: DeviceService,
    private measurementService: MeasurementService,
    private ngxService: NgxUiLoaderService
  ) {}

  ngOnInit(): void {
    this.deviceService.deviceGet().subscribe((i) => (this.devices = i.items!));
  }
  exportAlarms() {}
  exportMeasurements() {
    this.ngxService.startLoader('mainLoader')
    this.measurementService
      .measurementExportGet$Response({
        periodicity: this.selectedPeriodicted,
        start_date: this.startDate?.toISOString(),
        end_date: this.endDate?.toISOString(),
        data_type: this.dataType,
        id: this.selectedDevice,
      })
      .subscribe((i) => {
        this.ngxService.stopLoader('mainLoader')
        var headers = i.headers;
        console.log(headers); //<--- Check log for content disposition
        var fileName = headers
          .get('content-disposition')
          ?.split(';')[1]
          .split('=')[1]
          .replace(/\"/g, '');

        this.downloadFile(i.body, fileName!);
      });
  }
  downloadFile(data: any, fileName: string) {
    const blob = new Blob([data], {
      type: data.type,
    });
    var a = document.createElement('a');
    document.body.appendChild(a);
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  }
}
