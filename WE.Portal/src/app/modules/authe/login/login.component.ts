import { Component, Inject, OnInit } from '@angular/core';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import {
  MsalBroadcastService,
  MsalGuardConfiguration,
  MsalService,
  MSAL_GUARD_CONFIG,
} from '@azure/msal-angular';
import {
  AuthenticationResult,
  EventMessage,
  EventType,
  InteractionStatus,
  RedirectRequest,
} from '@azure/msal-browser';
import { JsonHubProtocol } from '@microsoft/signalr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { filter, Observable } from 'rxjs';
import { TenantSettingService } from 'src/api-service/iot-services/services';
import { PanelDto } from 'src/api-service/share-services/models';
import {
  AuditService,
  GroupsService,
  UserService,
} from 'src/api-service/share-services/services';
import {
  UsersPermissionsAuthService,
  UsersPermissionsUsersRolesService,
} from 'src/api-service/strapi-services/services';
import { HandleLastActiveService } from 'src/app/services/handle-last-active.service';
import { LastActiveService } from 'src/app/services/last-active.service';
import { UserInfoService } from 'src/app/services/user.service';
import { WidgetInfoService } from 'src/app/services/widget.services';
import { b2cPolicies, environment } from 'src/environments/environment';
import { ToastService } from 'src/helpers/services/toast.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  valCheck: string[] = ['remember'];
  isWatson = true;
  password!: string;
  identifier: string = '';
  isNusUser: boolean = true;
  subdomain = '';
  modelLeftMenu: any[] = [];
 
  constructor(
    @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
    private userservice: UsersPermissionsAuthService,
    private router: Router,
    private userInfoservice: UsersPermissionsUsersRolesService,
    private authService: MsalService,
    private msalBroadcastService: MsalBroadcastService,
    private userServices: UserService,
    private widgetService: WidgetInfoService,
    private groupSevice: GroupsService,
    private userInfoService: UserInfoService,
    private toartService: ToastService,
    private auditService: AuditService,
    private tenantSettingService: TenantSettingService,
    private ngxService: NgxUiLoaderService,
    private handleLastActiveService: HandleLastActiveService,
    private tenantseting: TenantSettingService,
 
    private sanitizer:DomSanitizer
  ) {
    this.subdomain = environment.production
      ? window.location.host.split('.')[0]
      : 'show';
    this.isWatson = this.subdomain == 'Watsons';
  }

  ngOnInit(): void {
    const nusUserDomain = 'nus';
    const showUserDomain = 'show';
    var domain = window.location.host.split('.')[0];
    //this.isNusUser = (domain == nusUserDomain || domain == showUserDomain);
    if (this.isNusUser) {
      this.onLoginMicrosoft();
    }

    this.msalBroadcastService.inProgress$
      .pipe(
        filter((status: InteractionStatus) => status === InteractionStatus.None)
      )
      .subscribe(() => {
        this.checkAndSetActiveAccount();
      });

    this.msalBroadcastService.msalSubject$
      .pipe(
        filter(
          (msg: EventMessage) =>
            msg.eventType === EventType.LOGIN_SUCCESS ||
            msg.eventType === EventType.ACQUIRE_TOKEN_SUCCESS ||
            msg.eventType === EventType.LOGIN_FAILURE
        )
      )
      .subscribe((result: EventMessage) => {
        //console.log(result);

        if (result.eventType == EventType.LOGIN_FAILURE) {
          this.onLoginMicrosoft();
          return;
        }
        const payload = result.payload as AuthenticationResult;
        this.checkAndSetActiveAccount();

        localStorage.setItem('token', payload?.accessToken!);
        this.ngxService.startLoader('mainLoader');

        this.userServices
          .tenantNameUserGetinfoGet({ tenant_name: this.subdomain })
          .subscribe((i) => {
            if (i.roles) {
              localStorage.setItem('user', JSON.stringify(i));
              localStorage.setItem('user_login_provider', 'microsoft');
          
              //this.router.navigate(['']);
              this.auditService
                .tenantNameAuditLastLoginPost({
                  tenant_name: i.tenant_name!,
                  body: { user_info: i },
                })
                .subscribe();
              this.getPanelsInfo();
            } else {
              localStorage.clear();
              this.ngxService.stopLoader('mainLoader');
              this.toartService.error('Login failed');
              setTimeout(() => {
                this.onLoginMicrosoft();
              }, 5000);
            }
          });
        return result;
      });
  }

  signIn() {
    this.userservice
      .authLocalPost({
        body: { identifier: this.identifier, password: this.password },
      })
      .subscribe((i) => {
        localStorage.setItem('token', i.jwt!);

        this.userInfoservice.usersMeGet().subscribe((i) => {
          this.auditService
            .tenantNameAuditLastLoginPost({
              tenant_name: 'watson',
              body: { user_info: i },
            })
            .subscribe();
          localStorage.setItem('user', JSON.stringify(i));
          localStorage.setItem('user_login_provider', 'strapi');
          const subdomain = window.location.host.split('.')[0];
          window.location.href = window.location.origin.replace(
            subdomain,
            i.tenant.name.toLowerCase()
          );

          this.getPanelsInfo();
        });
      });
  }

  onLoginMicrosoft() {
    if (this.msalGuardConfig.authRequest) {
      this.authService.loginRedirect({
        ...this.msalGuardConfig.authRequest,
      } as RedirectRequest);
    } else {
      this.authService.loginRedirect();
    }
  }
  checkAndSetActiveAccount() {
    /**
     * If no active account set but there are accounts signed in, sets first account to active account
     * To use active account set here, subscribe to inProgress$ first in your component
     * Note: Basic usage demonstrated. Your app may require more complicated account selection logic
     */
    let activeAccount = this.authService.instance.getActiveAccount();

    if (
      !activeAccount &&
      this.authService.instance.getAllAccounts().length > 0
    ) {
      let accounts = this.authService.instance.getAllAccounts();
      this.authService.instance.setActiveAccount(accounts[0]);
    }
  }

  getPanelsInfo() {
    this.tenantSettingService
      .tenantsettingLeftmenusettingGet()
      .subscribe((i) =>
        localStorage.setItem(
          'leftMenuSetting',
          JSON.stringify(i.setting_values)
        )
      );
    if (this.userInfoService.getTenantName() !== 'Watsons') {
      //debugger;
      this.groupSevice
        .tenantNameGroupsLeftmenuGet({
          tenant_name: this.userInfoService.getTenantName(),
        })
        .subscribe((i) => {
          localStorage.setItem('leftMenu', JSON.stringify(i));
          let panels: PanelDto[] = [];
          i.forEach((n) => {
            panels = panels.concat(n.panels!);
            this.widgetService.addPanel(panels);
          });
          this.tenantSettingService
            .tenantsettingTenantapplicationGet()
            .subscribe((i) => {
              localStorage.setItem(
                'applications',
                JSON.stringify(i.application)
              );
              this.router.navigate(['apps/' + i.default_application]);
              this.ngxService.stopLoader('mainLoader');
            });
          //debugger;
          // localStorage.setItem('leftMenu', JSON.stringify(this.modelLeftMenu));
        });
    }
  }
}
