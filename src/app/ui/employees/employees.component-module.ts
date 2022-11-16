import {NgModule} from '@angular/core';
import {EmployeesComponent} from './employees.component';
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EmployeesComponent],
  providers: [],
  exports: [EmployeesComponent]
})
export class EmployeesComponentModule {
}
