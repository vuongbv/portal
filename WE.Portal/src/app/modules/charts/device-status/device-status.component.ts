import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-device-status',
  templateUrl: './device-status.component.html',
  styleUrls: ['./device-status.component.scss']
})
export class DeviceStatusComponent implements OnInit, OnChanges {

  @Input() status?: string;
  @Input() uptime?:string;
  routerStatus = 'ONLINE' || 'OFFLINE';

  constructor() { }

  ngOnInit(): void {
    if (this.status === 'On') {
      this.routerStatus = 'ONLINE';
    } else {
      this.routerStatus = 'OFFLINE'
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.status === 'On') {
      this.routerStatus = 'ONLINE';
    } else {
      this.routerStatus = 'OFFLINE'
    }
  }

}
