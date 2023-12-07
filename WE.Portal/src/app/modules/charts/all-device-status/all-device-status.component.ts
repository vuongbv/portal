import { Component, Input, OnInit } from '@angular/core';
import { WidgetInfoService } from 'src/app/services/widget.services';

@Component({
  selector: 'app-all-device-status',
  templateUrl: './all-device-status.component.html',
  styleUrls: ['./all-device-status.component.scss'],
})
export class AllDeviceStatusComponent implements OnInit {
  @Input() devicesOn: number = 0;
  @Input() devicesOff: number = 0;

  constructor(
    private widgetInfoService: WidgetInfoService
  ) {}  

  ngOnInit(): void {}

  onDeviceLayer() {
    this.widgetInfoService.changeOnDeviceLayer();
  }

  offDeviceLayer() {
    this.widgetInfoService.changeOffDeviceLayer();
  }

}
