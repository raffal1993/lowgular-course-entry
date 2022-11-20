import {NgModule} from '@angular/core';
import {EmployeesComponent} from './employees.component';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [EmployeesComponent],
  providers: [],
  exports: [EmployeesComponent]
})
export class EmployeesComponentModule {
}
