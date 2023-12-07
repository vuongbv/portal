import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { TableModule } from 'primeng/table';

import { ApiKeyComponent } from './api-key/api-key.component';
import { ApiKeyFormComponent } from './api-key-form/api-key-form.component';
import { ApiKeyRoutingModule } from './api-key-router.module';
import { CalendarModule } from 'primeng/calendar';
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  declarations: [ApiKeyComponent, ApiKeyFormComponent],
  imports: [
    CommonModule,
    ApiKeyRoutingModule,
    FormsModule,
    MessageModule,
    InputTextModule,
    TableModule,
    ButtonModule,
    DropdownModule,
    CalendarModule,
    ClipboardModule
  ],
})
export class ApiKeyModule {}
