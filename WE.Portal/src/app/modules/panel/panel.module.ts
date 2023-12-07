import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { PanelComponent } from './panel/panel.component';
import { WidgetBulletComponent } from './widget-bullet/widget-bullet.component';
import { WidgetLineComponent } from './widget-line/widget-line.component';
import { WidgetMapComponent } from './widget-map/widget-map.component';
import { WidgetGaugeComponent } from './widget-gauge/widget-gauge.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PowerBIEmbedModule } from 'powerbi-client-angular';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { MessageModule } from 'primeng/message';
import { ToolbarModule } from 'primeng/toolbar';
import { WidgetPowerBiComponent } from './widget-power-bi/widget-power-bi.component';
import { WidgetSignalComponent } from './widget-signal/widget-signal.component';

import { WidgetStatComponent } from './widget-stat/widget-stat.component';
import { ChartsModule } from '../charts/charts.module';
import { PanelRoutingModule } from './panel-routing.module';
import { DialogService } from 'primeng/dynamicdialog';
import { ProductService } from 'src/app/services/product.service';
import { KtdGridModule } from '@katoid/angular-grid-layout';
import { WidgetComponent } from './widget/widget.component';
import { WidgetBatteryLevelComponent } from './widget-battery-level/widget-battery-level.component';
import { WidgetDeviceStatusComponent } from './widget-device-status/widget-device-status.component';
//import { WidgetBiNearbyPanelComponent } from './widget-bi-nearby-panel/widget-bi-nearby-panel.component';
import { WidgetOperationComponent } from './widget-operation/widget-operation.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CalendarModule } from 'primeng/calendar';
import { WidgetAllDeviceStatusComponent } from './widget-all-device-status/widget-all-device-status.component';
import { WidgetWeatherComponent } from './widget-weather/widget-weather.component';
import { SafePipe } from 'src/helpers/Pipes/safe-pipe';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { WidgetHtmlComponent } from './widget-html/widget-html.component';
import { TabViewModule } from 'primeng/tabview';
import { SafeHtmlPipe } from 'src/helpers/Pipes/html-pipe';
import { TableModule } from 'primeng/table';

import { WidgetBatchDeviceComponent } from './widget-batch-device/widget-batch-device.component';
import { TreeModule } from 'primeng/tree';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TooltipModule } from 'primeng/tooltip';
import { TitleTooltipComponent } from './title-tooltip/title-tooltip.component';
import { WidgetSignalSpeedComponent } from './widget-signal-speed/widget-signal-speed.component';
@NgModule({
  declarations: [
    PanelComponent,
    WidgetBulletComponent,
    WidgetLineComponent,
    WidgetMapComponent,
    WidgetGaugeComponent,
    WidgetPowerBiComponent,
    WidgetSignalComponent,
    WidgetStatComponent,
    WidgetComponent,
    WidgetBatteryLevelComponent,
    WidgetDeviceStatusComponent,
    //WidgetBiNearbyPanelComponent,
    WidgetOperationComponent,
    WidgetAllDeviceStatusComponent,
    WidgetWeatherComponent,
    SafePipe,
    SafeHtmlPipe,
    WidgetHtmlComponent,
    TitleTooltipComponent,
    WidgetBatchDeviceComponent,
    WidgetSignalSpeedComponent,
    
  ],
  imports: [
    NgxUiLoaderModule,
    CommonModule,
    FormsModule,
    DropdownModule,
    ButtonModule,
    ToolbarModule,
    MessageModule,
    ChartsModule,
    PowerBIEmbedModule,
    PanelRoutingModule,
    KtdGridModule,
    ReactiveFormsModule,
    InputSwitchModule,
    CalendarModule,
    TabViewModule,
    TableModule,
    TreeModule,
    TooltipModule,
    ScrollPanelModule
  ],
  exports: [PanelComponent],
  providers: [DatePipe, ProductService, DialogService],
})
export class PanelModule {}
