import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailSettingListComponent } from './email-setting-list/email-setting-list.component';
import { EmailSettingComponent } from './email-setting/email-setting.component';

const routes: Routes = [
  {
    path: 'list',
    component: EmailSettingListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingRoutingModule {}
