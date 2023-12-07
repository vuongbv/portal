import { Component, OnInit } from '@angular/core';

import Bullet from 'highcharts/modules/bullet';
import { DatePipe } from '@angular/common';
import * as Highcharts from 'highcharts';
import { ActivatedRoute, Router } from '@angular/router';
import { MeasurementService } from 'src/api-service/iot-services/services';
import {
  Periodicity,
  TotalPowerDto,
} from 'src/api-service/iot-services/models';
import { __makeTemplateObject } from 'tslib';
import { UserInfoService } from 'src/app/services/user.service';

Bullet(Highcharts);
@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss'],
})
export class DeviceComponent implements OnInit {
  optionsTime = [
    {
      name: 'Daily',
      value: Periodicity.Daily,
    },
    {
      name: 'Weekly',
      value: Periodicity.Weekly,
    },
    {
      name: 'Monthly',
      value: Periodicity.Monthly,
    },
    { name: 'Yearly', value: Periodicity.Yearly },
  ];
  selectedTime: Periodicity = Periodicity.Daily;
  powerData: any[] = [];
  powerDataCategories: string[] = [];
  SelectTimeSaving: Periodicity = Periodicity.Daily;
  SelectTimeTrends: Periodicity = Periodicity.Daily;
  SelectTimeCompare: Periodicity = Periodicity.Daily;
  device_id: string = '';
  channel_name: string[] = [];
  data: TotalPowerDto = {};
  measurement: any[] = [];
  compagePowerData: any[] = [];
  powerCompageCategories: string[] = [];
  estimatedSavingData: any[] = [];
  estimatedSavingCategories: any[] = [];
  selectChannel = 'channel';
  tenant = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private measurementService: MeasurementService,
    private datepipe: DatePipe,
    userservice: UserInfoService
  ) {
    this.tenant = userservice.getTenantName();
  }

  ngOnInit() {
    this.device_id = this.route.snapshot.params['id'];
    if (this.route.snapshot.params['channel_name']) {
      this.selectChannel = this.route.snapshot.params['channel_name'];
      this.channel_name.push(this.route.snapshot.params['channel_name']);
    }
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    if (this.tenant == 'Watsons') {
      this.loadMeasurement(Periodicity.Daily);
      this.loadMeasurementPower(Periodicity.Daily);
    }
  }
  loadMeasurementPower(periodicity: Periodicity) {
    this.measurementService
      .measurementTotalPowerGet({
        id: this.device_id,
        channel_names: this.channel_name,
        periodicity: periodicity,
      })
      .subscribe((i) => {
        this.data = i;
      });
  }
  loadMeasurement(
    periodicity: Periodicity,
    loadChart: LoadChart | null = null
  ) {
    this.measurementService
      .measurementSearchGet({
        id: this.device_id,
        periodicity: periodicity,
      })
      .subscribe((i) => {
        this.measurement = i;
        switch (loadChart) {
          case LoadChart.SAVING:
            this.bindingSaving();
            break;
          case LoadChart.COMPARE:
            this.bindingPowerCompage();
            break;
          case LoadChart.TRENDS:
            this.bindingEnegyTrends();
            break;
          default:
            this.bindingSaving();
            this.bindingEnegyTrends();
            this.bindingPowerCompage();
            break;
        }
      });
  }

  bindingSaving() {
    this.estimatedSavingData = [
      {
        name: 'Power',
        type: 'column',
        data: this.measurement.map((i) => {
          return [i.time, i[this.selectChannel.toLowerCase()].power?.value];
        }),
      },
    ];
    this.estimatedSavingCategories = this.measurement.map((i) => {
      return this.datepipe.transform(i.time, 'dd/MM/y')!;
    });
  }
  bindingEnegyTrends() {
    this.powerDataCategories = this.measurement.map((i) => {
      return this.datepipe.transform(i.time, 'dd/MM/y')!;
    });
    this.powerData = [
      {
        name: 'Power',
        type: 'spline',
        data: this.measurement.map((i) => {
          return [i.time, i[this.selectChannel.toLowerCase()].power?.value];
        }),
      },
    ];
  }
  bindingPowerCompage() {
    const powerCompage = this.measurement.slice(
      this.measurement.length - 2,
      this.measurement.length
    );
    this.powerCompageCategories = powerCompage.map((i) => {
      return this.datepipe.transform(i.time, 'dd/MM/y')!;
    });
    this.compagePowerData = [
      {
        name: 'Power',
        type: 'column',
        data: powerCompage.map((i) => {
          return [i.time, i[this.selectChannel.toLowerCase()].power?.value];
        }),
      },
    ];
  }
  onChangeTimeSaving() {
    this.loadMeasurement(this.SelectTimeSaving, LoadChart.SAVING);
  }
  onChangeTimeTrends() {
    this.loadMeasurement(this.SelectTimeTrends, LoadChart.TRENDS);
  }
  onChangeTimeCompare() {
    this.loadMeasurement(this.SelectTimeCompare, LoadChart.COMPARE);
  }
  onTimeChange() {
    this.loadMeasurementPower(this.selectedTime);
  }
}
export enum LoadChart {
  SAVING = 'saving',
  TRENDS = 'Trends',
  COMPARE = 'Compare',
}
