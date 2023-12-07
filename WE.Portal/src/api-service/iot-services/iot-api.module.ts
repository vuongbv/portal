/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { AlarmSettingService } from './services/alarm-setting.service';
import { DeviceService } from './services/device.service';
import { HealthCheckService } from './services/health-check.service';
import { HomeService } from './services/home.service';
import { MeasurementService } from './services/measurement.service';
import { OperationService } from './services/operation.service';
import { TenantSettingService } from './services/tenant-setting.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    AlarmSettingService,
    DeviceService,
    HealthCheckService,
    HomeService,
    MeasurementService,
    OperationService,
    TenantSettingService,
    ApiConfiguration
  ],
})
export class IotApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<IotApiModule> {
    return {
      ngModule: IotApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: IotApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('IotApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
