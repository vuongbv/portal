import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopbarComponent } from './topbar/topbar.component';
import { MenuitemComponent } from './menuitem/menuitem.component';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ButtonModule } from 'primeng/button';
import {MegaMenuModule} from 'primeng/megamenu';

@NgModule({
  declarations: [
    LayoutComponent,
    MenuComponent,

    TopbarComponent,
    MenuitemComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    TieredMenuModule,
    OverlayPanelModule,
    PanelMenuModule,
    ButtonModule,
    MegaMenuModule
  ],
})
export class SharedModule {}
