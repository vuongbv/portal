import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserFromComponent } from './user-from/user-from.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { MultiSelectModule } from 'primeng/multiselect';



@NgModule({
  declarations: [
    UserListComponent,
    UserFromComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    FormsModule,
    UserRoutingModule,
    DropdownModule,
    InputTextModule,
    MessageModule,
    MultiSelectModule
  ]
})
export class UsersModule { }
