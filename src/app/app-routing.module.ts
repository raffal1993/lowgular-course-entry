import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeesComponent} from './ui/employees/employees.component';
import {NewEmployeeComponent} from './ui/new-employee/new-employee.component';
import {HomepageComponent} from './ui/homepage/homepage.component';
import {EmployeeDetailsComponent} from './ui/employee-details/employee-details.component';
import {EmployeesComponentModule} from './ui/employees/employees.component-module';
import {EmployeeServiceModule} from './services/employee.service-module';
import {NewEmployeeComponentModule} from './ui/new-employee/new-employee.component-module';
import {HomepageComponentModule} from './ui/homepage/homepage.component-module';
import {EmployeeDetailsComponentModule} from './ui/employee-details/employee-details.component-module';

const routes: Routes = [{
  path: 'employee-list', component: EmployeesComponent
},
  {
    path: 'create-employee',
    component: NewEmployeeComponent
  },
  {path: '', component: HomepageComponent},
  {path: 'employee-details/:id/:name', component: EmployeeDetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes), EmployeesComponentModule, EmployeeServiceModule, NewEmployeeComponentModule, HomepageComponentModule, EmployeeDetailsComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
