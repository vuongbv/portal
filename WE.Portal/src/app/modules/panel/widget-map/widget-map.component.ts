import { Component, Input, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { DeviceService } from 'src/api-service/iot-services/services';

@Component({
  selector: 'app-widget-map',
  templateUrl: './widget-map.component.html',
  styleUrls: ['./widget-map.component.scss'],
})
export class WidgetMapComponent implements OnInit {
  @Input() device_id?: string;
  @Input() widget_id = '';
  @Input() height?: number | null;
  @Input() widget_under_title_description?: string | null;
  heightMap = 0;
  constructor(
    private deviceService: DeviceService,
    private ngxService: NgxUiLoaderService
  ) {}
  options: any = {
    center: [42.3601, -71.0589],
    bounds: [],
  };
  devices: any[] = [];
  ngOnInit(): void {
    this.ngxService.startLoader(this.widget_id);
    this.bindingLocation();
    this.heightMap = this.height ? this.height * 107 : 500;
  }
  bindingLocation() {
 

    this.deviceService
      .deviceGet({ device_id: this.device_id })
      .subscribe((i) => {
        this.ngxService.stopLoader(this.widget_id);
        this.devices = i.items!;
        this.options.bounds = i.items
          ?.filter((i) => i.gt_position?.lat && i.gt_position?.lat != 0)
          .map((i) => {
            return [i.gt_position?.lat, i.gt_position?.lng];
          });
      });
  }
}
