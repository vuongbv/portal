import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlarmComponent } from './alarm/alarm.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { BulletChartComponent } from './bullet-chart/bullet-chart.component';
import { GaugeChartComponent } from './gauge-chart/gauge-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { MapComponent } from './map/map.component';
import { SignalsStrengComponent } from './signals-streng/signals-streng.component';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
// import { ChartWeatherComponent } from './chart-weather/chart-weather.component';
import * as more from 'highcharts/highcharts-more.src';
import * as exporting from 'highcharts/modules/exporting.src';
import { ScrollerModule } from 'primeng/scroller';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DropdownModule } from 'primeng/dropdown';
import { BatteryLevelComponent } from './battery-level/battery-level.component';
import { ProgressBarModule } from 'primeng/progressbar';
import { DeviceStatusComponent } from './device-status/device-status.component';
import { AllDeviceStatusComponent } from './all-device-status/all-device-status.component';
import { CheckboxModule } from 'primeng/checkbox';

import { InputSwitchModule } from 'primeng/inputswitch';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { ExportToExcelModule } from 'src/app/shared/shared-components/export-to-excel/export-to-excel.module';

@NgModule({
  declarations: [
    AlarmComponent,
    BulletChartComponent,
    SignalsStrengComponent,
    GaugeChartComponent,
    LineChartComponent,
    BarChartComponent,
    DeviceStatusComponent,
    AllDeviceStatusComponent,
    MapComponent,
    BatteryLevelComponent,
  ],
  imports: [
    ChartModule,
    CommonModule,
    ScrollerModule,
    OverlayPanelModule,
    DropdownModule,
    CheckboxModule,
    ProgressBarModule,
    InputSwitchModule,
    CalendarModule,
    TableModule,
    ExportToExcelModule
  ],
  providers: [
    { provide: HIGHCHARTS_MODULES, useFactory: () => [more, exporting] },
  ],
  exports: [
    AlarmComponent,
    BulletChartComponent,
    SignalsStrengComponent,
    GaugeChartComponent,
    LineChartComponent,
    BarChartComponent,
    BatteryLevelComponent,
    MapComponent,
    DeviceStatusComponent,
    AllDeviceStatusComponent,
  ],
})
export class ChartsModule {}
