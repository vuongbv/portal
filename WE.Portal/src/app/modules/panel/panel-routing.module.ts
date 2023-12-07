import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PanelComponent } from './panel/panel.component';

@NgModule({
  imports: [
    RouterModule.forChild([
     {
        path: ':id',
        component: PanelComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class PanelRoutingModule {}
