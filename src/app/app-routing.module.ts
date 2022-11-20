import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './ui/employees/employees.component';
import { NewEmployeeComponent } from './ui/new-employee/new-employee.component';
import { HomepageComponent } from './ui/homepage/homepage.component';
import { EmployeesComponentModule } from './ui/employees/employees.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';
import { NewEmployeeComponentModule } from './ui/new-employee/new-employee.component-module';
import { HomepageComponentModule } from './ui/homepage/homepage.component-module';

const routes: Routes = [{ path: 'employee-list', component: EmployeesComponent }, { path: 'create-employee', component: NewEmployeeComponent }, { path: '', component: HomepageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes), EmployeesComponentModule, EmployeeServiceModule, NewEmployeeComponentModule, HomepageComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
