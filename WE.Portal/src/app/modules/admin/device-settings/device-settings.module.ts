import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingListComponent } from './setting-list/setting-list.component';
import { SettingFormComponent } from './setting-form/setting-form.component';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { InputTextModule } from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';
import { DeviceSettingRoutingModule } from './device-setting-router.module';
import { DropdownModule } from 'primeng/dropdown';
import {InputNumberModule} from 'primeng/inputnumber';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {AccordionModule} from 'primeng/accordion';
import { AddActionComponent } from './add-action/add-action.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { CheckboxModule } from 'primeng/checkbox';
import { MapComponent } from '../../charts/map/map.component';
import { ChartsModule } from '../../charts/charts.module';



@NgModule({
  declarations: [
    SettingListComponent,
    SettingFormComponent,
    AddActionComponent,
    
  ],
  imports: [
    CommonModule,
     FormsModule,
     TableModule,
     ButtonModule,
     MessageModule,
     InputTextModule,
     ListboxModule,
     DropdownModule,
     DeviceSettingRoutingModule,
     InputNumberModule,
     ConfirmDialogModule,
     AccordionModule,
     MultiSelectModule,
     CheckboxModule,
     ChartsModule
  ],providers:[ConfirmationService]
})
export class DeviceSettingsModule { }
