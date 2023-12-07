import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import {
  Role,
  TenantDto,
  UserViewModel,
} from 'src/api-service/share-services/models';
import {
  TenantService,
  UserService,
} from 'src/api-service/share-services/services';
import { UserInfoService } from 'src/app/services/user.service';
import { ToastService } from 'src/helpers/services/toast.service';

@Component({
  selector: 'app-user-from',
  templateUrl: './user-from.component.html',
  styleUrls: ['./user-from.component.scss'],
})
export class UserFromComponent implements OnInit {
  user: UserViewModel = {};
  tenants: TenantDto[] = [];
  LIST_ROLE :Role[]= [];
  selectedRoleName: string[] = [];
  tenantName = '';
  constructor(
    private userService: UserService,
    private tenantService: TenantService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private toastService: ToastService,
    private userInfoService: UserInfoService,
    private ngxService: NgxUiLoaderService
  ) {
    this.tenantName = this.userInfoService.getTenantName();
  }

  loadTenant() {
    this.tenantService
      .tenantSearchGet()
      .subscribe((i) => ( 
        this.tenants = i.items!));
  }

  ngOnInit(): void {
    this.loadRole();
    this.loadTenant();
    if (this.config.data.id) {
      this.ngxService.startLoader('mainLoader')
      this.userService
        .tenantNameUserIdGet({
          tenant_name: this.tenantName,
          id: this.config.data.id,
        })
        .subscribe((i) => {
          this.ngxService.stopLoader('mainLoader')
          this.user = i;
          this.user.roles?.forEach((role) => {
            this.selectedRoleName.push(role.name!);
          });
        });
    }
  }
  loadRole() {
    this.userService
      .tenantNameUserListrolesGet({ tenant_name: this.tenantName })
      .subscribe((i) => {
        this.LIST_ROLE = i;
      });
  }
  save() {
    this.ngxService.startLoader('mainLoader')
    this.userService
      .tenantNameUserIdPut({
        tenant_name: this.tenantName,
        id: this.config.data.id,
        body: this.user,
      })
      .subscribe((i) => {
        this.ngxService.stopLoader('mainLoader')
        this.toastService.success('Update User successfull');
        this.ref.close();
      });
  }
}
