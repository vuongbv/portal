/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { AlarmService } from './services/alarm.service';
import { ApplicationNameService } from './services/application-name.service';
import { AuditService } from './services/audit.service';
import { GroupsService } from './services/groups.service';
import { HealthCheckService } from './services/health-check.service';
import { HomeService } from './services/home.service';
import { PanelService } from './services/panel.service';
import { PowerBiService } from './services/power-bi.service';
import { SettingService } from './services/setting.service';
import { TenantService } from './services/tenant.service';
import { UserService } from './services/user.service';
import { VersionService } from './services/version.service';
import { WidgetService } from './services/widget.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    AlarmService,
    ApplicationNameService,
    AuditService,
    GroupsService,
    HealthCheckService,
    HomeService,
    PanelService,
    PowerBiService,
    SettingService,
    TenantService,
    UserService,
    VersionService,
    WidgetService,
    ApiConfiguration
  ],
})
export class ShareApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ShareApiModule> {
    return {
      ngModule: ShareApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ShareApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ShareApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
