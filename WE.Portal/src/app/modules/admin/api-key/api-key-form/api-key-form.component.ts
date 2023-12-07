import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import {
  CreateApiKeyModel,
  TenantDto,
} from 'src/api-service/share-services/models';
import { TenantService } from 'src/api-service/share-services/services';
import { ToastService } from 'src/helpers/services/toast.service';

@Component({
  selector: 'app-api-key-form',
  templateUrl: './api-key-form.component.html',
  styleUrls: ['./api-key-form.component.scss'],
})
export class ApiKeyFormComponent implements OnInit {
  constructor(
    private toastService: ToastService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private tenantService: TenantService
  ) {}
  apiKey: CreateApiKeyModel = { scopes: [] };
  scopes: string[] = [];
  selectDate?: Date;
  keyGen?: string;
  tenantId = '';
  tenants: TenantDto[] = [];
  ngOnInit(): void {
    this.tenantService
      .tenantSearchGet()
      .subscribe((i) => (this.tenants = i.items!));
    if (this.config.data.id) {
      this.keyGen = this.config.data.id;
      this.tenantService
        .tenantGenerateApiKeyIdGet({ id: this.config.data.id })
        .subscribe((i) => {
          this.apiKey = i;
          this.tenantId = i.tenant_id!;
          this.selectDate = new Date(i.expiry_time!);
        });
    }
  }
  onAddRow() {
    this.scopes.push('');
    this.apiKey.scopes?.push('');
  }
  onChangeScopes(event: any, index: number) {
    if (this.scopes?.length == 0) {
      this.scopes = this.apiKey.scopes!;
    }
    this.scopes![index] = event.target.value;
  }
  onRemove(rowIndex: number) {
    this.scopes?.splice(rowIndex, 1);
  }
  save() {
    this.apiKey.scopes = this.scopes;
    this.apiKey.expiry_time = this.selectDate?.toISOString();
    this.tenantService
      .tenantGenerateApiKeyIdPost({ id: this.tenantId, body: this.apiKey })
      .subscribe((i) => {
        this.keyGen = i;
        this.toastService.success('Generate key successfully');
      });
  }
}
