import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { TenantDto } from 'src/api-service/share-services/models';
import { TenantService } from 'src/api-service/share-services/services';
import { TenantFormComponent } from '../tenant-form/tenant-form.component';

@Component({
  selector: 'app-tenant-list',
  templateUrl: './tenant-list.component.html',
  styleUrls: ['./tenant-list.component.scss'],
})
export class TenantListComponent implements OnInit {
  tenants: TenantDto[] = [];
  pageindex = 1;
  pagesize = 10;
  total = 0;
  constructor(
    private tenantService: TenantService,
    private dialogservice: DialogService
  ) {}

  ngOnInit() {
    this.loadTenant();
  }
  loadTenant() {
    this.tenantService
      .tenantSearchGet({
        page_index: this.pageindex,
        page_size: this.pagesize,
      })
      .subscribe((i) => {
        this.tenants = i.items!;
        this.total = i.total_count!;
      });
  }
  lazyLoadTabel(event: LazyLoadEvent) {
    this.pageindex = event.first != 0 ?event.first! / event.rows! + 1 : 1;
    this.pagesize = event.rows!;
    this.loadTenant();
  }
  edit(tenantid: string) {
    this.opendialog(tenantid);
  }
  delete(tenantid: string) {}

  addNew() {
    this.opendialog(null);
  }
  private opendialog(id: string | null) {
    const ref = this.dialogservice.open(TenantFormComponent, {
      data: { id: id },
      header: id ? 'Edit Tenant' : 'Add new Tenant',
      width: '50%',
      position: 'top',
      maximizable: true,
    });
    ref.onClose.subscribe((r) => {
      this.loadTenant()
    });
  }
}
