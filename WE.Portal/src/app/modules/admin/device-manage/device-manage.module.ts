import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceListComponent } from './device-list/device-list.component';
import { DeviceFormComponent } from './device-form/device-form.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { DeviceManageRoutingModule } from './device-manager-router.module';
import {
  DialogService,
  DynamicDialogConfig,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  declarations: [DeviceListComponent, DeviceFormComponent],
  imports: [
    CommonModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    MessageModule,
    DeviceManageRoutingModule,
    DropdownModule,
    InputNumberModule,
  ],
  providers: [DialogService, DynamicDialogRef, DynamicDialogConfig],
  exports:[DeviceFormComponent]
})
export class DeviceManageModule {}
