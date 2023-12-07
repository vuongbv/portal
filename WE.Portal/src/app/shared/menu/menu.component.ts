import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { TenantSettingService } from 'src/api-service/iot-services/services';
import { LeftMenuDto } from 'src/api-service/share-services/models';
import { VersionService } from 'src/api-service/share-services/services';
import { UserInfoService } from 'src/app/services/user.service';
import { LayoutService } from '../layout.service';
import { LeftMenuSettingValue } from 'src/api-service/iot-services/models';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  model: any[] = [];
  admin: any[] = [];
  @Input() logoUrl: string = ''; //set by api later
  appId?: string;

  version: string | null | undefined = '';

  constructor(
    public layoutService: LayoutService,
    private userInfoService: UserInfoService,

    private tenantSettingService: TenantSettingService,
    private sanitizer: DomSanitizer,
    private router: Router,
    public el: ElementRef,
    private versionService: VersionService
  ) {}

  ngOnInit() {
    this.versionService
      .versionGet({ package_name: 'shareserviceportal' })
      .subscribe((data) => {
        this.version = data.version;
      });

    //this.getTenantLogo();
    const urls = this.router.url.split('/');
    if (urls[1] == 'apps') {
      if (urls[2] && urls[2].indexOf('#') < 0) {
        this.appId = urls[2];
      } else {
        if (urls[2] && urls[2].indexOf('#') > 0) {
          this.appId = urls[2].slice(0, urls[2].indexOf('#'));
        } else {
          const applications = JSON.parse(
            localStorage.getItem('applications')!
          )[0];
          this.appId = urls[2];
        }
      }
    }
    if (this.userInfoService.getTenantName() == 'Watsons') {
      this.model.push({
        items: [
          {
            label: 'Submain',
            icon: 'pi pi-fw pi-th-large',
            showCollapse: false,
            routerLink: ['/0CEFAFD818EC'],
            items: [
              {
                label: 'Circuit 1',
                icon: 'pi pi-fw pi-circle-fill text-xs',
                routerLink: ['device/0CEFAFD818EC/Channel1'],
              },
              {
                label: 'Circuit 2',
                icon: 'pi pi-fw pi-circle-fill text-xs',
                routerLink: ['device/0CEFAFD818EC/Channel2'],
              },
              {
                label: 'Circuit 3',
                icon: 'pi pi-fw pi-circle-fill text-xs',
                routerLink: ['device/0CEFAFD818EC/Channel3'],
              },
            ],
          },
        ],
      });
    } else {
      const menustore = localStorage.getItem('leftMenu');
      if (menustore) {
        let menu = JSON.parse(menustore) as LeftMenuDto[];
        const appId = this.appId;
        if (this.appId) {
          menu = menu.filter((i) => i.app_id == appId);
        }
        menu
          .sort((a, b) => Number(b.is_home_page) - Number(a.is_home_page))
          .forEach((n) => {
            const menu = {
              label: n.group_name,
              // routerLink: ['admins/groups'],

              showCollapse: true,
              routerLink: n.is_home_page == true ? ['/apps/' + appId] : null,
              routerLinkActiveOptions: { exact: true },
              items:
                n.is_home_page === false
                  ? n.panels?.map(function (item) {
                      return {
                        label: item.panel_name,
                        routerLink: appId
                          ? [appId + '/panel/' + item.id]
                          : ['panel/' + item.id],
                        routerLinkActiveOptions: { exact: true },
                      };
                    })
                  : null,
              icon:
                n.is_home_page === false
                  ? 'pi pi-map-marker'
                  : 'pi pi-fw pi-home',
              expanded: this.checkActiveState(
                n.is_home_page === true
                  ? [
                      '/apps/SolarPowerManagement',
                      '/apps/AirQuality',
                      '/apps/SurveillanceSecurity',
                      '/apps/SmartWater',
                    ]
                  : n.panels?.map((i) => '/apps/' + appId + '/panel/' + i.id)
              ),
            };
            this.model.push(menu);
          });
      }
    }
    if (this.userInfoService.isAdmin()) {
      const menuadmin = {
        label: 'Settings',
        items: [
          {
            label: 'Exports',
            icon: 'pi pi-fw pi-id-card',
            routerLink: [this.appId + '/admins/tenants/exports'],
          },
          {
            label: 'Tariff',
            icon: 'pi pi-fw pi-id-card',
            routerLink: [this.appId + '/admins/tenants/tariff'],
          },
          {
            label: 'Alarm Rules',
            icon: 'pi pi-fw pi-id-card',
            routerLink: [this.appId + '/admins/device-setting/alarm-rule'],
          },
          {
            label: 'Audit',
            icon: 'pi pi-fw pi-check-square',
            routerLink: [this.appId + '/admins/audit/list'],
          },
          {
            label: 'Users Roles',
            icon: 'pi pi-fw pi-users',
            routerLink: [this.appId + '/admins/users/list'],
          },
        ],
        labelIcon: 'pi pi-fw pi-user',
        expanded: this.checkActiveState([
          '/apps/' + this.appId + '/admins/tenants/exports',
          '/apps/' + this.appId + '/admins/tenants/tariff',
          '/apps/' + this.appId + '/admins/device-setting/alarm-rule',
          '/apps/' + this.appId + '/admins/audit/list',
          '/apps/' + this.appId + '/admins/users/list',
        ]),
      };
      const menuseting = localStorage.getItem('leftMenuSetting');
      if (menuseting) {
        let setting = JSON.parse(menuseting) as LeftMenuSettingValue[];
        setting = setting.filter((i) => i.value == false);
        menuadmin.items = menuadmin.items.filter(
          (i) => setting.findIndex((n) => n.menu == i.label) < 0
        );
      }

      this.model.push(menuadmin);
    }
  }
  checkActiveState(givenLink: string[] | undefined) {
    if (givenLink && givenLink.indexOf(this.router.url) > -1) {
      return true;
    } else {
      return false;
    }
  }
  // getTenantLogo(): void {
  //   this.tenantSettingService
  //     .tenantsettingGet({ key: 'Logo' })
  //     .subscribe((res) => {
  //       this.logoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
  //         `data:image/png;base64, ${res}`
  //       );
  //     });
  // }
}
