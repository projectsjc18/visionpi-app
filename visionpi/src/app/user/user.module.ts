import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ReactiveFormsModule }    from '@angular/forms';
import { AdministrationComponent } from './administration/administration.component';
import { UserComponent } from './user.component';
import { SuccessfulRegistration } from './messages/successful-registration.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserRegisterComponent } from './user-register/user-register.component'


@NgModule({
  declarations: [AdministrationComponent, UserComponent, SuccessfulRegistration, UserListComponent, UserRegisterComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ],
  entryComponents: [SuccessfulRegistration],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserModule { }
