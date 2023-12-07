import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeviceNusComponent } from './device-nus/device-nus.component';
import { DeviceComponent } from './device/device.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: DashboardComponent },
      {
        path: 'device/:id/:channel_name',
        component: DeviceComponent,
      },
      // {
      //   path: 'panel',
      //   component: DeviceNusComponent,
      // },
    ]),
  ],
  exports: [RouterModule],
})
export class DashboardsRoutingModule {}
