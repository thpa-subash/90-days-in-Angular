import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';


@NgModule({
  declarations: [EmployeeloginComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule
  ]
})
export class CompanyModule { }
