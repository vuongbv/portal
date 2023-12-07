import { Component, OnInit } from '@angular/core';
import { ConfirmationService, LazyLoadEvent } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { ApiKeyDto } from 'src/api-service/share-services/models';
import { TenantService } from 'src/api-service/share-services/services';
import { ToastService } from 'src/helpers/services/toast.service';
import { ApiKeyFormComponent } from '../api-key-form/api-key-form.component';

@Component({
  selector: 'app-api-key',
  templateUrl: './api-key.component.html',
  styleUrls: ['./api-key.component.scss'],
})
export class ApiKeyComponent implements OnInit {
  keys: ApiKeyDto[] = [];

  pageindex = 1;
  pagesize = 10;
  total = 0;

  constructor(
    private tenantSettingService: TenantService,
    private dialogservice: DialogService,
    private toastService:ToastService,
    private confirmService: ConfirmationService
  ) {}

  ngOnInit(): void {}
  loadKey() {
    this.tenantSettingService
      .tenantGenerateApiKeyGet({
        page_size: this.pagesize,
        page_index: this.pageindex,
      })
      .subscribe((i) => {
        this.keys = i.items!;
        this.total = i.total_count!;
      });
  }
  lazyLoadTabel(event: LazyLoadEvent) {
    this.pageindex = event.first != 0 ? event.first! / event.rows! + 1 : 1;
    this.pagesize = event.rows!;
    this.loadKey();
  }

  addNew() {
    this.opendialog(null);
  }
  edit(id: string) {
    this.opendialog(id);
  }

  delete(id: string) {
    this.confirmService.confirm({
      message: 'Are you sure that you want to deleted',
      accept: () => {
        this.tenantSettingService
          .tenantGenerateApiKeyIdDelete({ id: id })
          .subscribe((i) => {
            this.toastService.success('Delete successfull');
            this.loadKey();
          });
      },
    });
  }
  private opendialog(id: string | null) {
    const ref = this.dialogservice.open(ApiKeyFormComponent, {
      data: { id: id },
      header: 'Edit ',
      width: '50%',
      position: 'top',
      maximizable: true,
    });
    ref.onClose.subscribe((r) => {
      this.pageindex = 1
      this.loadKey();
    });
  }
}
