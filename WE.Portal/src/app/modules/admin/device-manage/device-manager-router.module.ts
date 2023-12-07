import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from 'src/helpers/gards/role-guard.guard';
import { DeviceFormComponent } from './device-form/device-form.component';
import { DeviceListComponent } from './device-list/device-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: DeviceListComponent,
    canActivate: [RoleGuard],
    data: { roles: ['TenantAdmin'] },
  },
  {
    path: 'onboard',
    component: DeviceFormComponent,
    canActivate: [RoleGuard],
    data: { roles: ['TenantAdmin'] },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeviceManageRoutingModule {}
