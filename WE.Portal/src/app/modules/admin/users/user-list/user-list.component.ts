import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { DialogService } from 'primeng/dynamicdialog';
import { UserDto } from 'src/api-service/share-services/models';
import { UserService } from 'src/api-service/share-services/services';
import { UserInfoService } from 'src/app/services/user.service';
import { UserFromComponent } from '../user-from/user-from.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users: UserDto[] = [];
  email?: string;
  pageindex = 1;
  pagesize = 10;
  total = 0;
  tenantName = '';
  constructor(
    private userService: UserService,
    private dialogservice: DialogService,
    private userInfoService: UserInfoService,
    private ngxService: NgxUiLoaderService
  ) {
    this.tenantName = this.userInfoService.getTenantName();
  }

  ngOnInit(): void {
    this.loadUsers();
  }
  loadUsers() {
    this.ngxService.startLoader('mainLoader');
    this.userService
      .tenantNameUserSearchGet({
        tenant_name: this.tenantName,
        email: this.email,
        page_index: this.pageindex,
        page_size: this.pagesize,
      })
      .subscribe((i) => {
        this.ngxService.stopLoader('mainLoader');
        this.users = i.items!;
        this.total = i.total_count!;
      });
  }

  edit(id: string) {
    this.opendialog(id);
  }
  delete(tenantid: string) {}
  lazyLoadTabel(event: any) {
    this.pageindex = event.first != 0 ? event.first! / event.rows! + 1 : 1;
    this.pagesize = event.rows!;
    this.loadUsers();
  }
  addNew() {
    this.opendialog(null);
  }
  private opendialog(id: string | null) {
    const ref = this.dialogservice.open(UserFromComponent, {
      data: { id: id },
      header: 'Edit User',
      width: '50%',
      height: '100%',
      position: 'top',
      maximizable: true,
      resizable: true,
    });
    ref.onClose.subscribe((r) => {
      this.loadUsers();
    });
  }

  displayrole(roles: any[]) {
    return roles.map((i) => ' '+i.name);
  }
}
