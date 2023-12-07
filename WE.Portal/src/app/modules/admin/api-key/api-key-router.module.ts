import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from 'src/helpers/gards/role-guard.guard';
import { ApiKeyComponent } from './api-key/api-key.component';

const routes: Routes = [
  {
    path: 'key',
    component: ApiKeyComponent,
    canActivate:[RoleGuard],
    data:{roles:['TenantAdmin']}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApiKeyRoutingModule {}
