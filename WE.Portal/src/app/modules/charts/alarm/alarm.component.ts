import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as signalR from '@microsoft/signalr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { LazyLoadEvent, MenuItem } from 'primeng/api';
import { alarmFakeApi } from 'src/api-service/share-services/fakeData';
import {
  AlarmDto,
  AlarmNotificationDto,
} from 'src/api-service/share-services/models';
import { AlarmService } from 'src/api-service/share-services/services';
import { UserInfoService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';
import { ToastService } from 'src/helpers/services/toast.service';

@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.scss'],
})
export class AlarmComponent implements OnInit {
  alarms: AlarmNotificationDto[] = [];
  @Input() widget_id = '';
  @Input() widget_under_title_description?: string | null;
  pageSize = 10;
  pageIndex = 1;
  total = 0;
  tenant = '';
  @Input() device_id?: string;
  alarmActions = [
    {
      label: 'Acknowledge',
      icon: 'pi pi-bell',
    },
    {
      label: 'Clear',
      icon: 'pi pi-times',
    },
  ];
  private hubConnection!: signalR.HubConnection;
  constructor(
    private alarmSevice: AlarmService,
    private userService: UserInfoService,
    private toastService: ToastService, private ngxService: NgxUiLoaderService) { }

  ngOnInit(): void {
    this.tenant = this.userService.getTenantName();
    this.ngxService.startLoader(this.widget_id);
    this.loadAlarm();
    this.startConnection();

    this.alarmDataListener();
  }
  loadAlarm(addmore: boolean = false) {
    // //fake api
    // let i = alarmFakeApi;
    // this.ngxService.stopLoader(this.widget_id);
    // if (addmore) {
    //   this.alarms.push(...i.items!);
    // } else {
    //   this.alarms = i.items!;
    // }

    // this.total = i.total_count!;
    // return;

    this.alarmSevice
      .tenantNameAlarmDeviceGet({
        id: this.device_id,
        page_index: this.pageIndex,
        page_size: this.pageSize,
        tenant_name: this.tenant,
      })
      .subscribe((i) => {
        this.ngxService.stopLoader(this.widget_id);
        if (addmore) {
          this.alarms.push(...i.items!);
        } else {
          this.alarms = i.items!;
        }

        this.total = i.total_count!;
      });
  }
  loadData(event: LazyLoadEvent) {
    if (this.pageIndex * this.pageSize < this.total) {
      this.pageIndex = this.pageIndex + 1;
      this.loadAlarm(true);
    }
  }

  clearOrAcknowledgedAlarm(alarmId: string, action: string): void {
    this.alarmSevice
      .tenantNameAlarmIdsStatusPut({
        ids: alarmId,
        status: action,
        tenant_name: 'nus',
      })
      .subscribe((res) => {
        this.toastService.success('Update Alarm successfull');
        this.loadAlarm();
      });
  }

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(
        (environment.production
          ? window.location.origin + environment.signalRUrl
          : environment.signalRUrl) +
        '/alarm?tenant_name=' +
        this.tenant
      )
      .build();
    this.hubConnection
      .start()
      .then(() =>
        this.hubConnection.invoke('ConnectGetAlarmRequest').then(() => {
        })
      )
      .catch((err) => console.log('Error while starting connection: ' + err));
  };

  public alarmDataListener = () => {
    return this.hubConnection.on('AlarmUpdated', (data: any[]) => {
      if (this.device_id && data.some(i => i.deviceId == this.device_id)) {
        this.loadAlarm();
      }
      if (!this.device_id) {
        this.loadAlarm();
      }
      data.forEach(i => {
        if (i.alarmMessage != "") {
          this.toastService.info(i.severity, i.alarmMessage)
        }
      })
    });
  };
}
