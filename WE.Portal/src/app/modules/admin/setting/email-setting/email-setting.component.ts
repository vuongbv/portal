import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import {
  AlarmRecepient,
  RecepientType,
} from 'src/api-service/iot-services/models';
import { TenantSettingService } from 'src/api-service/iot-services/services';
import { RecepientTypes } from 'src/helpers/enum';
import { ToastService } from 'src/helpers/services/toast.service';

@Component({
  selector: 'app-email-setting',
  templateUrl: './email-setting.component.html',
  styleUrls: ['./email-setting.component.scss'],
})
export class EmailSettingComponent implements OnInit {
  email: AlarmRecepient = { recepient: [] };
  recepientTypes = RecepientTypes;
  recepient?: string[] = [];
  constructor(
    private tenantSettingService: TenantSettingService,
    private toastService: ToastService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    
  ) {}


  ngOnInit(): void {
    if (this.config.data.id) {
      this.tenantSettingService
        .tenantsettingAlarmrecepientGet({ id: this.config.data.id })
        .subscribe((i) => {
          this.email = i;         
        });
    }
  }
  onAddRow() {
    this.recepient?.push('')
    this.email.recepient?.push('');
  }
  save() {
    this.email.recepient = this.recepient;
    if (this.config.data.id) {
      this.tenantSettingService
        .tenantsettingAlarmrecepientIdPut({
          body: this.email,
          id: this.config.data.id,
        })
        .subscribe((i) => {
          this.toastService.success('Update Successfully');
          this.ref.close(true);
        });
    } else {
      this.tenantSettingService
        .tenantsettingAlarmrecepientPost({
          body: this.email,
        })
        .subscribe((i) => {
          this.toastService.success('Create Successfully');
          this.ref.close(true);
        });
    }
  }
  onRemove(rowIndex: number) {
    this.email.recepient?.splice(rowIndex, 1);
  }
  onChangeRecepiet(event: any, index: number) {
    if(this.recepient?.length==0){
      this.recepient = this.email.recepient!
    }
    this.recepient![index] = event.target.value;
  }
}
