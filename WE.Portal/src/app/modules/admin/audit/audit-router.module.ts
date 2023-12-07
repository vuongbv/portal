import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from 'src/helpers/gards/role-guard.guard';
import { AuditListComponent } from './audit-list/audit-list.component';




const routes: Routes = [
  {
    path: 'list',
    component: AuditListComponent,
    canActivate:[RoleGuard],
    data:{roles:['TenantAdmin', 'Admin']}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuditRoutingModule {}
