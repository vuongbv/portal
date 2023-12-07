import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LeftMenuDto } from 'src/api-service/share-services/models';
@Injectable()
export class PanelService {
  private panel$ = new BehaviorSubject<string>('');
  savePanel$ = this.panel$.asObservable();

  isResizePanel$ = new BehaviorSubject<boolean>(false);
  currentIsResizePanel$ = this.isResizePanel$.asObservable();

  constructor() {}

  setPanelId(panelId: string) {
    this.panel$.next(panelId);
  }

  getPanelId(appName: string, is_home_page: boolean = false) {
    const menustore = localStorage.getItem('leftMenu');

    if (menustore) {
      const menu = JSON.parse(menustore) as LeftMenuDto[];
      const group = menu.find(
        (i) => i.app_id == appName && i.is_home_page == true
      );
      if (group) {
        return group!.panels![0].id!;
      }
    }
    return '';
  }

  resizePanel() {
    this.isResizePanel$.next(true);
  }
}

@Injectable()
export class WidgetUpdateService {
  private deviceId$ = new BehaviorSubject<string>('');
  deviceUpdate$ = this.deviceId$.asObservable();
  constructor() {}
  setDeviceId(device_id: string) {
    this.deviceId$.next(device_id);
  }
}
