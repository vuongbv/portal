import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TenantListComponent } from './tenant-list/tenant-list.component';
import { TenantFormComponent } from './tenant-form/tenant-form.component';
import { TenantRoutingModule } from './tenant-routing.module';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import {DialogModule} from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';
import {ToastModule} from 'primeng/toast';
import { ToastService } from 'src/helpers/services/toast.service';
import { ShareApiModule } from 'src/api-service/share-services/share-api.module';
import { MessageService } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { TariffComponent } from './tariff/tariff.component';
import { InputNumberModule } from 'primeng/inputnumber';

import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { ExportsComponent } from './exports/exports.component';

@NgModule({
  declarations: [TenantListComponent, TenantFormComponent, TariffComponent,  ExportsComponent],
  imports: [
    CommonModule,
    TenantRoutingModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    TableModule,
    PanelModule,
    DialogModule,
    FormsModule,
    MessageModule,
    InputNumberModule,
    DropdownModule,
    CalendarModule
    
  ],providers:[]
})
export class TenantsModule {}
