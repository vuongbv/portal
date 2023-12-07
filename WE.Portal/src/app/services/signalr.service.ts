import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserInfoService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class SignalrMeasurementService {
  private deviceId$ = new BehaviorSubject<string>('');
  deviceUpdate$ = this.deviceId$.asObservable();
  constructor(private userService: UserInfoService) {}
  setDeviceId(device_id: string) {
    this.deviceId$.next(device_id);
  }
  public hubConnection: signalR.HubConnection =
    new signalR.HubConnectionBuilder()
      .withUrl(
        (environment.production
          ? window.location.origin
          : environment.domainUrl) +
          environment.SignalrIotEndPoint +
          '?tenant_name=' +
          this.userService.getTenantName()
      )
      .build();
  public startConnection = (title: string) => {
    this.hubConnection.start().then(() => {
      this.hubConnection
        ?.invoke('ConnectToMeasurementGroup')
        .then((i) => {
          console.log(title + ' Connected Hub');
        })
        .catch(function (err) {
          return console.error(title + ' ' + err.toString());
        });
    });
  };

  public addTransferChartDataListener = () => {
    this.hubConnection.on('MeasurementChange', (data) => {
      this.setDeviceId(data.deviceId);
    });
  };
}
