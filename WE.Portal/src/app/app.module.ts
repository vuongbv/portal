import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { JwtModule } from '@auth0/angular-jwt';
import { MessageModule } from 'primeng/message';
import { StrapiModule } from 'src/api-service/strapi-services/strapi.module';
import { AuthGuard } from 'src/helpers/gards/auth-guard.guard';
import { ToastService } from 'src/helpers/services/toast.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ShareApiModule } from 'src/api-service/share-services/share-api.module';
import {
  environment,
  loginRequest,
  msalConfig,
} from 'src/environments/environment';
import { ToastModule } from 'primeng/toast';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { IotApiModule } from 'src/api-service/iot-services/iot-api.module';
import { ApiInterceptor } from 'src/helpers/interceptors/ApiIndicator';
import { API_INTERCEPTOR_PROVIDER } from 'src/helpers/interceptors';
import {
  MsalBroadcastService,
  MsalGuard,
  MsalGuardConfiguration,
  MsalInterceptorConfiguration,
  MsalModule,
  MsalRedirectComponent,
  MsalService,
  MSAL_GUARD_CONFIG,
  MSAL_INSTANCE,
  MSAL_INTERCEPTOR_CONFIG,
} from '@azure/msal-angular';
import {
  InteractionType,
  IPublicClientApplication,
  PublicClientApplication,
} from '@azure/msal-browser';
import { PanelService } from './services/panel.service';
import { RoleGuard } from 'src/helpers/gards/role-guard.guard';
import { SignalrMeasurementService } from './services/signalr.service';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { LastActiveService } from './services/last-active.service';
import { HandleLastActiveService } from './services/handle-last-active.service';

export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication(msalConfig);
}

/**
 * Set your default interaction type for MSALGuard here. If you have any
 * additional scopes you want the user to consent upon login, add them here as well.
 */
export function MSALGuardConfigFactory(): MsalGuardConfiguration {
  return {
    interactionType: InteractionType.Redirect,
    authRequest: loginRequest,
  };
}
export function MSALInterceptorConfigFactory(): MsalInterceptorConfiguration {
  const protectedResourceMap = new Map<string, Array<string>>();
  protectedResourceMap.set('https://graph.microsoft.com/v1.0/me', [
    'user.read',
  ]); // Prod environment. Uncomment to use.
  return {
    interactionType: InteractionType.Redirect,
    protectedResourceMap,
  };
}
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    MessageModule,
    ToastModule,
    ConfirmDialogModule,
    NgxUiLoaderHttpModule.forRoot({ showForeground: true,}),
    NgxUiLoaderModule.forRoot({
      bgsColor: 'red',
      bgsOpacity: 0.5,
      bgsPosition: 'bottom-right',
      bgsSize: 60,

      blur: 5,
      delay: 0,
      fastFadeOut: true,
      fgsColor: 'red',
      fgsPosition: 'center-center',
      fgsSize: 60,
      fgsType: 'cube-grid',
      gap: 24,
      logoPosition: 'center-center',
      masterLoaderId: 'master',
      hasProgressBar: false,
      overlayBorderRadius: '0',
      overlayColor: 'rgba(40, 40, 40, 0.8)',
      pbColor: 'red',
      pbDirection: 'ltr',
      pbThickness: 3,
      text: '',
      textColor: '#FFFFFF',
      textPosition: 'center-center',
      minTime:10
    }),

    ShareApiModule.forRoot({
      rootUrl: environment.production
        ? window.location.origin + environment.rootShare
        : environment.shareUrl,
    }),
    IotApiModule.forRoot({
      rootUrl: environment.production
        ? window.location.origin + environment.rootIot
        : environment.domainUrl,
    }),
    StrapiModule.forRoot({ rootUrl: environment.StrapiUrl }),
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token');
        },
      },
    }),
    MsalModule,
  ],
  providers: [
    AuthGuard,
    RoleGuard,
    MessageService,
    ToastService,
    PanelService,
    API_INTERCEPTOR_PROVIDER,
    SignalrMeasurementService,
    ConfirmationService,
    Title,
    ApiInterceptor,
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory,
    },
    {
      provide: MSAL_GUARD_CONFIG,
      useFactory: MSALGuardConfigFactory,
    },
    {
      provide: MSAL_INTERCEPTOR_CONFIG,
      useFactory: MSALInterceptorConfigFactory,
    },
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [LastActiveService],
      useFactory: (lastActiveService: LastActiveService) => () =>
        lastActiveService.setUp(),
    },
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [HandleLastActiveService],
      useFactory: (loginService: HandleLastActiveService) => () =>
        loginService.setUp(),
    },
    MsalService,
    MsalGuard,
    MsalBroadcastService,
  ],
  bootstrap: [AppComponent, MsalRedirectComponent],
})
export class AppModule {}
