import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { TenantDto } from 'src/api-service/share-services/models';
import { GroupDto } from 'src/api-service/share-services/models/group-dto';
import {
  GroupsService,
  TenantService,
} from 'src/api-service/share-services/services';
import { UserInfoService } from 'src/app/services/user.service';
import { GroupFormComponent } from '../group-form/group-form.component';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss'],
})
export class GroupListComponent implements OnInit {
  groups: GroupDto[] = [];
  tenants: TenantDto[] = [];
  isAdmin = false;
  selectedTenant = '';
  pageindex = 1;
  pagesize = 10;
  total = 0;
  constructor(
    private dialogservice: DialogService,
    private groupservice: GroupsService,
    private tenantService: TenantService,
    userService: UserInfoService
  ) {
    this.selectedTenant = userService.getTenantName();
  }

  ngOnInit(): void {
    if (this.isAdmin) {
      this.loadTenant();
    } else {
      this.loadGroup();
    }
  }
  edit(id: string) {
    this.opendialog(id);
  }
  delete(id: string) {}

  addNew() {
    this.opendialog(null);
  }
  loadTenant() {
    this.tenantService
      .tenantSearchGet()
      .subscribe((i) => (this.tenants = i.items!));
  }
  selectTenant() {
    this.loadGroup();
  }
  loadGroup() {
    this.groupservice
      .tenantNameGroupsSearchGet({
        tenant_name: this.selectedTenant,
        page_index: this.pageindex,
        page_size: this.pagesize,
        
      })
      .subscribe((i) => {
        this.total = i.total_count!;
        this.groups = i.items!;
      });
  }
  lazyLoadTabel(event: LazyLoadEvent) {
    this.pageindex = event.first != 0 ? event.first! / event.rows! + 1 : 1;
    this.pagesize = event.rows!;
    this.loadGroup();
  }
  private opendialog(id: string | null) {
    var ref = this.dialogservice.open(GroupFormComponent, {
      data: { id: id, tenantName: this.selectedTenant },
      header: id ? 'Edit group' : 'Add new group',
      width: '50%',
      position: 'top',
      maximizable: true,
    });
    ref.onClose.subscribe((r) => {
      this.pageindex = 1
      this.loadGroup();
    });
  }
}
