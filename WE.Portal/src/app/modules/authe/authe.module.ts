import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AutheRoutingModule } from './authe-routing.module';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {MessageModule} from 'primeng/message';
import { FormsModule } from '@angular/forms';
import { StrapiModule } from 'src/api-service/strapi-services/strapi.module';
import { UserModalComponent } from './user-modal/user-modal.component';

@NgModule({
  declarations: [LoginComponent, UserModalComponent],
  imports: [
    CommonModule,
    AutheRoutingModule,
    CheckboxModule,
    ButtonModule,
    PasswordModule,
    InputTextModule,
    FormsModule,
    MessageModule,
  ],
})
export class AutheModule {}
