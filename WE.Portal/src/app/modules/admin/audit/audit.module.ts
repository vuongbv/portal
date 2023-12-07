import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuditListComponent } from './audit-list/audit-list.component';
import { AuditAlarmComponent } from './audit-alarm/audit-alarm.component';
import { AuditLoginComponent } from './audit-login/audit-login.component';
import { AuditRoleComponent } from './audit-role/audit-role.component';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { AuditRoutingModule } from './audit-router.module';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ExportToExcelModule } from 'src/app/shared/shared-components/export-to-excel/export-to-excel.module';



@NgModule({
  declarations: [

    AuditListComponent,
    AuditAlarmComponent,
    AuditLoginComponent,
    AuditRoleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TabViewModule,
    TableModule,
    CalendarModule,
    AuditRoutingModule,
    InputTextModule, 
    DropdownModule,
    ExportToExcelModule
  ]
})
export class AuditModule { }
