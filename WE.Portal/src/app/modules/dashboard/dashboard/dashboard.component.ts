import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Periodicity,
  TotalPowerDto,
} from 'src/api-service/iot-services/models';
import {
  DeviceService,
  MeasurementService,
} from 'src/api-service/iot-services/services';
import { UserInfoService } from 'src/app/services/user.service';
import { LoadChart } from '../device/device.component';
import { IReportEmbedConfiguration, models } from 'powerbi-client';
import { PowerBiService } from 'src/api-service/share-services/services';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
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
  selectedTime: Periodicity = Periodicity.Daily;
  tennant = '';
  options: any = {
    center: [42.3601, -71.0589],
    bounds: [],
  };
  reportConfig?: IReportEmbedConfiguration;
  reportConfig0?: IReportEmbedConfiguration;
  reportConfig1?: IReportEmbedConfiguration;
  reportConfig2?: IReportEmbedConfiguration;
  reportConfig3?: IReportEmbedConfiguration;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private measurementService: MeasurementService,
    private datepipe: DatePipe,
    userService: UserInfoService,
    private powerBiService: PowerBiService,
    private deviceService: DeviceService
  ) {
    this.tennant = userService.getTenantName();
  }

  ngOnInit() {
    this.device_id = this.route.snapshot.params['id'];
    if (this.route.snapshot.params['channel_name']) {
      this.selectChannel = this.route.snapshot.params['channel_name'];
      this.channel_name.push(this.route.snapshot.params['channel_name']);
    }
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    if (this.tennant == 'Watsons') {
      this.loadMeasurement(Periodicity.Daily);
      this.loadMeasurementPower(Periodicity.Daily);
      this.loadMeasurement(Periodicity.Monthly);
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
  bindingLocation() {
    this.deviceService.deviceGet().subscribe((i) => {
      this.options.bounds = i.items?.map((i) => {
        return [i.gt_position?.lat, i.gt_position?.lng];
      });
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
  loadPowerBi() {
    this.reportConfig = {
      type: 'report',
      settings: {
        filterPaneEnabled: false,
        navContentPaneEnabled: false,
        panes: {
          filters: {
            expanded: false,
            visible: false,
          },
        },
        background: models.BackgroundType.Default,
      },
      tokenType: models.TokenType.Embed,
    };

    //TODO: widget_1 (smart) but need share api
    this.powerBiService
      .apiPowerbiReportGet({
        group_id: 'ead5585f-ac40-4089-b426-bd762285ca9d',
        report_id: '0c77c7b0-016e-4b42-b93f-6e7ac0ac2c86',
      })
      .subscribe((i) => {
        //build report config0
        this.reportConfig0 = {
          ...this.reportConfig,
          accessToken: i.token!,
          embedUrl: i.embed_url!,
          id: i.id!,
        };
      });

    //TODO: widget_2 (smart) but need share api
    this.powerBiService
      .apiPowerbiReportGet({
        group_id: 'ead5585f-ac40-4089-b426-bd762285ca9d',
        report_id: '9e616235-aa4e-44cd-a680-a43d24142002',
      })
      .subscribe((i) => {
        //build report config0
        this.reportConfig1 = {
          ...this.reportConfig,
          accessToken: i.token!,
          embedUrl: i.embed_url!,
          id: i.id!,
        };
      });

    //TODO: widget_3 (smart) but need share api
    this.powerBiService
      .apiPowerbiReportGet({
        group_id: 'ead5585f-ac40-4089-b426-bd762285ca9d',
        report_id: 'c3b07a3c-3b44-4ceb-8934-9b31f7d21ed7',
      })
      .subscribe((i) => {
        //build report config0
        this.reportConfig2 = {
          ...this.reportConfig,
          accessToken: i.token!,
          embedUrl: i.embed_url!,
          id: i.id!,
        };
      });

    //TODO: widget_4 (smart) but need share api
    this.powerBiService
      .apiPowerbiReportGet({
        group_id: 'ead5585f-ac40-4089-b426-bd762285ca9d',
        report_id: 'e0372799-43ce-4014-abc3-c84f18847630',
      })
      .subscribe((i) => {
        //build report config0
        this.reportConfig3 = {
          ...this.reportConfig,
          accessToken: i.token!,
          embedUrl: i.embed_url!,
          id: i.id!,
        };
      });
  }
}
