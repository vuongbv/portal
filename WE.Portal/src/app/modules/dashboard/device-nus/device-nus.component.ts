import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { DeviceDto, TotalPowerDto } from 'src/api-service/iot-services/models';
import { Periodicity } from 'src/api-service/iot-services/models/periodicity';
import {
  DeviceService,
  MeasurementService,
} from 'src/api-service/iot-services/services';

@Component({
  selector: 'app-device-nus',
  templateUrl: './device-nus.component.html',
  styleUrls: ['./device-nus.component.scss'],
})
export class DeviceNusComponent implements OnInit {
  fivegSignalSeries: any = [];
  fivegSignalCatalog: [] = [];
  device_id: string = '';
  channel_name: [] = [];
  data: TotalPowerDto = {
    avg_current: 0,
    avg_voltage: 0,
    current_potential_saving: 0,
    total_potential_saving: 0,
    total_power: 0,
  };
  device: DeviceDto = {};
  PowerGeneratedSunlightCatalog: any[] = [];
  PowerGeneratedSunlightSeries: any[] = [];
  powwerGeneratedWeatherCatalog: [] = [];
  powwerGeneratedWeatherSeries: [] = [];
  measurement: any[] = [];

  fivegStreng = 0;
  enclousureSeries: any[] = [];
  SolarSeries: any[] = [];
  PowerHourlyFivegCatalog: any[] = [];
  PowerHourlyFivegCatalogSeries: any[] = [];
  batteryVoltage = 0;
  batterySeries: any[] = [];
  options: any = {
    center: [42.3601, -71.0589],
    bounds: [],
  };
  listId = {
    power_temp: {
      id_device1: '40138851',
      //id_device2: "207223240",
      //id_device3: "40138853"
    },
    fiveG: {
      id_device1: '40138852',
      //id_device2: "207223241",
      //id_device3: "40138854"
    },
  };
  currentDate = new Date();
  constructor(
    private datepipe: DatePipe,
    private measurementService: MeasurementService,
    private deviceService: DeviceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.device_id = this.route.snapshot.params['id'];
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    switch (this.device_id) {
      case '207223240':
        this.listId = {
          power_temp: {
            id_device1: '207223240',
          },
          fiveG: {
            id_device1: '207223241',
          },
        };
        break;
      case '40138851':
        this.listId = {
          power_temp: {
            id_device1: '40138851',
          },
          fiveG: {
            id_device1: '40138852',
          },
        };
        break;
      case '40138853':
        this.listId = {
          power_temp: {
            id_device1: '40138853',
          },
          fiveG: {
            id_device1: '40138854',
          },
        };
        break;
      default:
        this.listId = {
          power_temp: {
            id_device1: '207223240',
          },
          fiveG: {
            id_device1: '207223241',
          },
        };
        break;
    }
    this.fetchData();
  }

  fetchData(): void {
    this.loadMeasurementPower(Periodicity.Daily);
    // this.loadMeasurement(Periodicity.Daily);
    this.bindingFiveGStrength();
    this.bindingTemperature();
    this.bindindBattery();
    this.bindingHourlyFiveg();
    this.bindingHourlyPowerGeneratedSunlight();
    this.bindingLocation();
  }

  loadMeasurementPower(periodicity: Periodicity) {
    this.measurementService
      .measurementTotalPowerGet({
        id: this.listId.power_temp.id_device1,
        channel_names: this.channel_name,
        periodicity: periodicity,
      })
      .subscribe((i) => {
        if (i) {
          this.data = i;
        }
      });
  }
  loadMeasurement(periodicity: Periodicity) {
    this.measurementService
      .measurementSearchGet({
        id: this.device_id,
        periodicity: periodicity,
      })
      .subscribe((i) => {
        this.measurement = i;

        this.bindingPowerGeneratedWeather();

        this.bindingPowerUse();
      });
  }
  bindingPowerGeneratedWeather() {
    throw new Error('Method not implemented.');
  }

  bindingPowerUse() {
    throw new Error('Method not implemented.');
  }

  bindindBattery() {
    this.measurementService
      .measurementBatteryGet({ id: this.listId.power_temp.id_device1 })
      .subscribe((i) => {
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
  bindingFiveGStrength() {
    this.measurementService
      .measurementFivegGet({ id: this.listId.fiveG.id_device1 })
      .subscribe((i) => {
        this.fivegStreng = i.signal_percent! / 20;
      });
  }
  bindingTemperature() {
    this.measurementService
      .measurementTemperatureGet({ id: this.listId.power_temp.id_device1 })
      .subscribe((i) => {
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
  bindingHourlyFiveg() {
    this.measurementService
      .measurementFivegsignalhourlyGet({ id: this.listId.fiveG.id_device1 })
      .subscribe((i) => {
        this.PowerHourlyFivegCatalogSeries = [
          {
            name: 'signal strength',
            type: 'line',
            data: i.map((n) => {
              return [`${n._id}:00`, n.value];
            }),
          },
        ];
        this.PowerHourlyFivegCatalog = i.map((n) => {
          return `${n._id}:00`;
        });
      });
  }
  bindingHourlyPowerGeneratedSunlight() {
    this.measurementService
      .measurementPowerhourlyGet({ id: this.listId.power_temp.id_device1 })
      .subscribe((i) => {
        this.PowerGeneratedSunlightSeries = [
          {
            name: 'Power generated',
            type: 'line',
            data: i.total_power?.map((n) => {
              return [`${n._id}:00`, n.value];
            }),
          },
          {
            name: 'Sun Light',
            type: 'line',
            data: i.sun_light?.map((n) => {
              return [`${n._id}:00`, n.value];
            }),
          },
        ];
        this.PowerGeneratedSunlightCatalog = i.total_power!.map((n) => {
          return `${n._id}:00`;
        });
      });
  }
  bindingLocation() {
    this.deviceService
      .deviceSourceIdSourceGet({ source_id: this.listId.power_temp.id_device1 })
      .subscribe((i) => {
        this.options.bounds = [[i.gt_position?.lat, i.gt_position?.lng]];
      });
  }
}
