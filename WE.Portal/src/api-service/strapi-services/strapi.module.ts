/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { UploadFileService } from './services/upload-file.service';
import { UsersPermissionsUsersRolesService } from './services/users-permissions-users-roles.service';
import { UsersPermissionsAuthService } from './services/users-permissions-auth.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    UploadFileService,
    UsersPermissionsUsersRolesService,
    UsersPermissionsAuthService,
    ApiConfiguration
  ],
})
export class StrapiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<StrapiModule> {
    return {
      ngModule: StrapiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: StrapiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('StrapiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
