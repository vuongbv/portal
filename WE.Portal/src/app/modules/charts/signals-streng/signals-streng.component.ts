import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MeasurementService } from 'src/api-service/iot-services/services';
@Component({
  selector: 'app-signals-streng',
  templateUrl: './signals-streng.component.html',
  styleUrls: ['./signals-streng.component.scss'],
})
export class SignalsStrengComponent implements OnInit {
  @Input() strength = 5;
  @Input() name?: string;
  @Input() device_id?: string;
  @Input() currentDate: Date = new Date();
  constructor(
    public date: DatePipe,
    
  ) {}

  ngOnInit(): void {}
}
