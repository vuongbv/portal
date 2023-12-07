import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';

import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { DashboardsRoutingModule } from './dashboard-routing.module';
import { DeviceComponent } from './device/device.component';
import { ProductService } from 'src/app/services/product.service';

import { ScrollerModule } from 'primeng/scroller';
import { DropdownModule } from 'primeng/dropdown';
import { TabViewModule } from 'primeng/tabview';

import { SelectButtonModule } from 'primeng/selectbutton';
import { DeviceNusComponent } from './device-nus/device-nus.component';
import { PowerBIEmbedModule } from 'powerbi-client-angular';

import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ChartsModule } from '../charts/charts.module';
import { PanelModule } from '../panel/panel.module';
@NgModule({
  declarations: [DashboardComponent, DeviceComponent, DeviceNusComponent],
  imports: [
    CommonModule,
    ScrollerModule,
    FormsModule,
    DropdownModule,
    MenuModule,
    TableModule,
    StyleClassModule,
    PanelMenuModule,
    ButtonModule,
    DashboardsRoutingModule,
    TabViewModule,
    SelectButtonModule,
    PowerBIEmbedModule,
    OverlayPanelModule,
    ChartsModule,
    PanelModule
  ],
  providers: [DatePipe, ProductService]
  
})
export class DashboardModule {}
