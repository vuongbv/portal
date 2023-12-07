import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import {
  DeviceDto,
  Action,
  CreateOrUpdateThresholdSettingModel,
  LeftMenuSettingValue,
} from 'src/api-service/iot-services/models';
import {
  AlarmSettingService,
  DeviceService,
  TenantSettingService,
} from 'src/api-service/iot-services/services';
import { CreateAlarmModel } from 'src/api-service/share-services/models';
import { ToastService } from 'src/helpers/services/toast.service';
import { OperatorType } from 'src/helpers/enum';
import { Operator } from 'src/api-service/iot-services/models';
import { AnyObject } from 'chart.js/types/basic';

@Component({
  selector: 'app-setting-form',
  templateUrl: './setting-form.component.html',
  styleUrls: ['./setting-form.component.scss'],
})
export class SettingFormComponent implements OnInit {
  setting?: CreateOrUpdateThresholdSettingModel = { actions: [] };

  devices?: DeviceDto[];
  operatortype = OperatorType;
  selectedoperator?: Operator;
  actionTemplates: Action[] = [];
  show = false;

  showgeoFencing = true;
  Operator = Operator;
  options: any = {
    center: [42.3601, -71.0589],
    bounds: [],
  };
  constructor(
    private deviceService: DeviceService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private toastService: ToastService,
    private alarmSettingService: TenantSettingService
  ) {}

  ngOnInit(): void {
    const menuseting = localStorage.getItem('leftMenuSetting');
    if (menuseting) {
      let setingvalue  = JSON.parse(menuseting) as LeftMenuSettingValue[]
      const geoFencing = setingvalue.find(i=>i.menu =="GeoFencing");
      if(geoFencing){
        this.showgeoFencing = geoFencing.value!;
      }
    }
    this.deviceService.deviceGet().subscribe((i) => {
      this.devices = i.items!;
      this.options.bounds = i.items
        ?.filter((i) => i.gt_position?.lat && i.gt_position?.lat != 0)
        .map((i) => {
          return [i.gt_position?.lat, i.gt_position?.lng];
        });
    });

    if (this.config.data.id) {
      this.alarmSettingService
        .tenantsettingThresholdIdGet({
          id: this.config.data.id,
        })
        .subscribe((i) => {
          this.setting = i as CreateOrUpdateThresholdSettingModel;
        });
    }
  }
  save() {
    if (this.config.data.id) {
      this.alarmSettingService
        .tenantsettingThresholdIdPut({
          id: this.config.data.id,
          body: this.setting,
        })
        .subscribe((i) => {
          this.toastService.success('Update successfull');
          this.ref.close(true);
        });
    } else {
      this.alarmSettingService
        .tenantsettingThresholdPost({
          body: this.setting,
        })
        .subscribe((i) => {
          this.toastService.success('Create successfull');
          this.ref.close(true);
        });
    }
  }
  drawPolygon(e: string) {
    if (this.setting && e.length > 0) {
      this.setting.geometry = e;
    }
  }
  addAction() {
    this.setting?.actions?.unshift({
      // device: this.setting.device,
      // position: { height: 1, width: 1, x: 0, y: 0 },
    });
  }

  removeAction(index: number) {
    this.setting?.actions?.splice(index, 1);
  }
  showMap() {
    this.show = true;
  }
}
