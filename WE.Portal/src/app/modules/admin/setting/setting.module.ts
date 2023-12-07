import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailSettingComponent } from './email-setting/email-setting.component';
import { SettingRoutingModule } from './device-setting-router.module';
import { FormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { EmailSettingListComponent } from './email-setting-list/email-setting-list.component';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [EmailSettingComponent, EmailSettingListComponent],
  imports: [
    CommonModule,
    SettingRoutingModule,
    FormsModule,
    MessageModule,
    InputTextModule,
    TableModule,
    ButtonModule,
    DropdownModule,
  ],
})
export class SettingModule {}
