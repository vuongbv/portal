import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import { AuthGuard } from 'src/helpers/gards/auth-guard.guard';
import { RoleGuard } from 'src/helpers/gards/role-guard.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/authe/authe.module').then((n) => n.AutheModule),
  },
  {
    path: 'apps',
    component: LayoutComponent,
    children: [
      {
        path: ':appname',
        loadChildren: () =>
          import('./modules/dashboard/dashboard.module').then(
            (n) => n.DashboardModule
          ),
      },

      {
        path: ':appname/panel',
        loadChildren: () =>
          import('./modules/panel/panel.module').then((n) => n.PanelModule),
      },

      {
        path: ':appname/admins',
        loadChildren: () =>
          import('./modules/admin/admin.module').then((n) => n.AdminModule),
        canActivate: [RoleGuard],
        data: { roles: ['Admin', 'Operator', 'TenantAdmin'] },
      },
    ],
   
    canActivate: [AuthGuard],
  },  
  { path: '**', redirectTo: 'auth' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
