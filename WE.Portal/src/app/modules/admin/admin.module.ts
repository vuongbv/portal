import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-route.module';

import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';



@NgModule({
  declarations: [],
  imports: [CommonModule,  AdminRoutingModule, DynamicDialogModule],

  providers: [DialogService],
})
export class AdminModule {}
