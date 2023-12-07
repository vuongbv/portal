import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from 'src/helpers/gards/role-guard.guard';
import { GroupListComponent } from './group-list/group-list.component';
import { PageListComponent } from './page-list/page-list.component';


const routes: Routes = [
  {
    path: 'list',
    component: GroupListComponent,
    canActivate:[RoleGuard],
    data:{roles:['TenantAdmin']}
  },
  {
    path: 'page',
    component: PageListComponent,
    canActivate:[RoleGuard],
    data:{roles:['TenantAdmin']}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupRoutingModule {}
