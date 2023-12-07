import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { TenantViewModel } from 'src/api-service/share-services/models';
import { TenantService } from 'src/api-service/share-services/services';
import { ToastService } from 'src/helpers/services/toast.service';

@Component({
  selector: 'app-tenant-form',
  templateUrl: './tenant-form.component.html',
  styleUrls: ['./tenant-form.component.scss'],
})
export class TenantFormComponent implements OnInit {
  tenant: TenantViewModel = { name: '' };
  constructor(
    private tenantservice: TenantService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    if (this.config.data.id) {
      this.tenantservice
        .tenantIdGet({ id: this.config.data.id })
        .subscribe((i) => (this.tenant = i));
    }
  }
  nameChange(newValue: string) {
    if (this.config.data.id) {
      this.tenant.url = newValue.replace(/\s/g, '').toLocaleLowerCase();
    }
  }
  save() {
    if (this.config.data.id) {
      this.tenantservice
        .tenantIdPut({
          id: this.config.data.id,
          body: this.tenant,
        })
        .subscribe((i) => {
          this.toastService.success('Update Tenant successfull');
          this.ref.close();
        });
    } else {
      this.tenantservice
        .tenantPost({
          body: this.tenant,
        })
        .subscribe((i) => {
          this.toastService.success('Create Tenant successfull');
          this.ref.close();
        });
    }
  }
}
